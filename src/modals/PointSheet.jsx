import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { points } from "../data/mockData";

export function PointSheet({ pointId, close, toast }) {
  const point = points.find(value => value.id === pointId) || points[0];
  
  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <section className="sheet point-sheet" role="dialog" aria-modal="true" aria-label={point.name}>
        <div className="sheet-handle"/>
        <button className="sheet-close" onClick={close} aria-label="Cerrar"><Icon name="close" size={19}/></button>
        <span className="large-pin"><Icon name="location" size={27}/></span>
        <small className={point.open ? "status-open" : "status-closed"}>{point.open ? "Abierto ahora" : "Cerrado ahora"}</small>
        <h1>{point.name}</h1>
        <p className="address"><Icon name="location" size={17}/>{point.address}</p>
        <div className="point-meta">
          <span><Icon name="route" size={19}/><strong>{point.distance}</strong><small>desde ti</small></span>
          <span><Icon name="clock" size={19}/><strong>{point.time}</strong><small>andando</small></span>
        </div>
        <h2>Materiales admitidos</h2>
        <div className="type-list">
          {point.types.map(type => <span key={type}><Icon name="check" size={14}/>{type}</span>)}
        </div>
        <Button icon="route" onClick={() => toast("Ruta iniciada en el mapa")}>Cómo llegar</Button>
      </section>
    </div>
  );
}