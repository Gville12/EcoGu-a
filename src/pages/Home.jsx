import { Header } from "../components/Header";
import { SearchField } from "../components/SearchField";
import { Icon } from "../components/Icon";
import { categories } from "../data/mockData";

export function Home({ openSearch, openGuide, goMap }) {
  return (
    <main className="screen home-screen">
      <Header/>
      <section className="welcome">
        <p className="eyebrow">Miércoles, 11 de junio</p>
        <h1>Hola, Marta.<br/><span>Reciclar hoy suma.</span></h1>
      </section>
      <div className="home-search" onClick={openSearch}>
        <SearchField value="" onChange={() => {}} onFocus={openSearch}/>
      </div>
      <section className="impact-card">
        <div className="impact-copy">
          <span className="impact-icon"><Icon name="leaf"/></span>
          <p>Tu impacto este mes</p>
          <strong>12 objetos reciclados</strong>
          <small>Equivale a 2,4 kg de CO₂ evitado</small>
        </div>
        <div className="progress-ring"><span>68%</span></div>
      </section>
      <section>
        <div className="section-heading">
          <h2>¿Qué quieres reciclar?</h2>
          <button onClick={openSearch}>Ver todo</button>
        </div>
        <div className="category-grid">
          {categories.slice(1, 5).map((cat, index) => (
            <button className={`category-card category-${index}`} key={cat.id} onClick={openSearch}>
              <span>{cat.symbol}</span><strong>{cat.short}</strong>
            </button>
          ))}
        </div>
      </section>
      <section className="near-card">
        <div className="near-map">
          <span className="mini-road road-one"/>
          <span className="mini-road road-two"/>
          <span className="mini-pin"><Icon name="location" size={18}/></span>
        </div>
        <div>
          <small>A 8 min de ti</small>
          <strong>Punto Limpio La Isleta</strong>
          <span><i/> Abierto hasta las 20:00</span>
        </div>
        <button className="round-arrow" onClick={goMap} aria-label="Ver en el mapa">
          <Icon name="arrow" size={18}/>
        </button>
      </section>
      <section>
        <div className="section-heading"><h2>Aprende algo nuevo</h2></div>
        <button className="tip-card" onClick={() => openGuide(4)}>
          <span className="tip-visual"><Icon name="info" size={28}/></span>
          <span>
            <small>Consejo rápido</small>
            <strong>¿Dónde se tiran las pilas?</strong>
            <em>Ver guía <Icon name="arrow" size={15}/></em>
          </span>
        </button>
      </section>
    </main>
  );
}