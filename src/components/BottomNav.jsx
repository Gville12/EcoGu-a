import { Icon } from "./Icon";

export function BottomNav({ active, setActive }) {
  const nav = [
    { id: "home", label: "Inicio", icon: "home" }, 
    { id: "explore", label: "Buscar", icon: "search" }, 
    { id: "map", label: "Mapa", icon: "map" }, 
    { id: "profile", label: "Perfil", icon: "user" }
  ];

  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {nav.map(item => (
        <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => setActive(item.id)}>
          <Icon name={item.icon}/>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}