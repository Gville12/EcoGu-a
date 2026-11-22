import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { SearchField } from "../components/SearchField";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { buscarObjetos } from "../services/api";

const CATEGORIAS = ["Todos", "Envases", "Papel", "Vidrio", "Orgánico", "Especiales"];

export function Explore({ userName, openGuide }) {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [validacionError, setValidacionError] = useState("");


  useEffect(() => {
    if (query.length === 1) {
      setValidacionError("Escribe al menos 2 letras para buscar.");
      return;
    } else {
      setValidacionError("");
    }

    const timer = setTimeout(async () => {
      setCargando(true);
      setError(null);
      try {
        const data = await buscarObjetos(query, categoria);
        setResultados(data);
      } catch (err) {
        setError("No se pudo conectar con el servidor. Inténtalo de nuevo.");
      } finally {
        setCargando(false);
      }
    }, 500); 

    return () => clearTimeout(timer);
  }, [query, categoria]);

  const limpiarFiltros = () => {
    setQuery("");
    setCategoria("Todos");
    setValidacionError("");
    setError(null);
  };

  return (
    <main className="screen explore-screen">
      <Header title="Guía de reciclaje" subtitle="Encuentra el lugar correcto" userName={userName}/>
      
      <SearchField value={query} onChange={setQuery} autoFocus={false}/>
      
      {validacionError && (
        <p className="form-error" style={{ marginTop: '10px' }} role="alert">
          <Icon name="info" size={17}/> {validacionError}
        </p>
      )}

      <div className="chips" role="list">
        {CATEGORIAS.map(cat => (
          <button 
            key={cat} 
            className={categoria === cat ? "chip active" : "chip"} 
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {(categoria !== "Todos" || query !== "") && (
        <div className="active-filters">
          <span>Filtros activos:</span>
          {query && (
            <button className="filter-tag" onClick={() => setQuery("")}>
              "{query}" <Icon name="close" size={12}/>
            </button>
          )}
          {categoria !== "Todos" && (
            <button className="filter-tag" onClick={() => setCategoria("Todos")}>
              {categoria} <Icon name="close" size={12}/>
            </button>
          )}
          <button className="clear-all" onClick={limpiarFiltros}>Limpiar todo</button>
        </div>
      )}

      {cargando && (
        <div className="loading-state">
          <p>Buscando objetos...</p>
        </div>
      )}

      {error && !cargando && (
        <div className="empty-state">
          <span style={{ background: '#fae8e5', color: 'var(--danger)' }}><Icon name="info" size={28}/></span>
          <h2>Error de conexión</h2>
          <p>{error}</p>
          <Button variant="secondary" onClick={() => setQuery(query + " ")}>Reintentar</Button>
        </div>
      )}

      {!cargando && !error && (
        <>
          <div className="results-label">
            <strong>{resultados.length} resultados</strong>
            <span>Ordenados por relevancia</span>
          </div>
          
          <div className="item-list">
            {resultados.map(item => (
              <button className="recycle-item" key={item.id} onClick={() => openGuide(item.id)}>
                <span className={`item-symbol ${item.color}`}>{item.simbolo}</span>
                <span className="item-copy">
                  <strong>{item.nombre}</strong>
                  <small>{item.categoria}</small>
                  <span><i className={item.color}/>{item.contenedor}</span>
                </span>
                <Icon name="chevron" size={18}/>
              </button>
            ))}
          </div>

          {resultados.length === 0 && (
            <div className="empty-state">
              <span><Icon name="search" size={28}/></span>
              <h2>No lo encontramos</h2>
              <p>No hay resultados para "{query}". Prueba con otra palabra o cambia de categoría.</p>
              <Button variant="secondary" onClick={limpiarFiltros}>Limpiar filtros</Button>
            </div>
          )}
        </>
      )}
    </main>
  );
}