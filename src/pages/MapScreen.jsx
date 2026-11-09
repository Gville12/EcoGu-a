import { useState } from "react";
import { Header } from "../components/Header";
import { Icon } from "../components/Icon";
import { points } from "../data/mockData";

export function MapScreen({ userName, selectPoint }) {
  const [filter, setFilter] = useState("Todos");
  return (
    <main className="map-screen">
      <div className="map-top">
        <Header title="Puntos cercanos" subtitle="Las Palmas de G.C." userName={userName}/>
        <div className="map-search">
          <Icon name="search" size={19}/><span>Buscar por zona</span>
          <button aria-label="Mi ubicación"><Icon name="target" size={20}/></button>
        </div>
        <div className="map-filters">
          {["Todos", "Puntos limpios", "Recogida"].map(value => (
            <button className={filter === value ? "active" : ""} onClick={() => setFilter(value)} key={value}>{value}</button>
          ))}
        </div>
      </div>
      <div className="map-canvas" aria-label="Mapa de puntos de reciclaje">
        <span className="park park-a"/><span className="park park-b"/><span className="water"/>
        <span className="street street-a"/><span className="street street-b"/><span className="street street-c"/><span className="street street-d"/>
        <small className="map-label label-a">La Isleta</small><small className="map-label label-b">Santa Catalina</small><small className="map-label label-c">Puerto</small>
        {points.map((point, index) => (
          <button key={point.id} className={`map-pin pin-${index + 1}`} onClick={() => selectPoint(point.id)} aria-label={point.name}>
            <Icon name="location" size={22}/><span>{index + 1}</span>
          </button>
        ))}
        <button className="locate-button" aria-label="Centrar mi ubicación"><Icon name="target"/></button>
      </div>
      <div className="point-carousel">
        {points.slice(0, 2).map((point, index) => (
          <button className="point-card" onClick={() => selectPoint(point.id)} key={point.id}>
            <span className="point-number">{index + 1}</span>
            <span className="point-copy">
              <small>{point.distance} · {point.time} andando</small>
              <strong>{point.name}</strong>
              <em className={point.open ? "open" : "closed"}>{point.open ? "Abierto ahora" : "Cerrado"}</em>
            </span>
            <Icon name="chevron" size={17}/>
          </button>
        ))}
      </div>
    </main>
  );
}