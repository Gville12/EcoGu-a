import { useMemo } from "react";
import { Header } from "../components/Header";
import { SearchField } from "../components/SearchField";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { categories, items } from "../data/mockData";

export function Explore({ userName, query, setQuery, category, setCategory, openGuide }) {
  const filtered = useMemo(() => 
    items.filter(item => (category === "Todos" || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase())), 
  [query, category]);

  return (
    <main className="screen explore-screen">
      <Header title="Guía de reciclaje" subtitle="Encuentra el lugar correcto" userName={userName}/>
      <SearchField value={query} onChange={setQuery} autoFocus={false}/>
      <div className="chips" role="list">
        {categories.map(cat => (
          <button key={cat.id} className={category === cat.id ? "chip active" : "chip"} onClick={() => setCategory(cat.id)}>{cat.label}</button>
        ))}
      </div>
      <div className="results-label"><strong>{filtered.length} resultados</strong><span>Ordenados por relevancia</span></div>
      <div className="item-list">
        {filtered.map(item => (
          <button className="recycle-item" key={item.id} onClick={() => openGuide(item.id)}>
            <span className={`item-symbol ${item.tone}`}>{item.symbol}</span>
            <span className="item-copy">
              <strong>{item.name}</strong>
              <small>{item.category}</small>
              <span><i className={item.tone}/>{item.bin}</span>
            </span>
            <Icon name="chevron" size={18}/>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <span><Icon name="search" size={28}/></span>
          <h2>No lo encontramos</h2>
          <p>Prueba con otro nombre o elige una categoría diferente.</p>
          <Button variant="secondary" onClick={() => { setQuery(""); setCategory("Todos"); }}>Limpiar filtros</Button>
        </div>
      )}
    </main>
  );
}