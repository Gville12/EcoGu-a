import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header({ title, subtitle, back, action, userName }) {
  return (
    <header className="topbar">
      {back ? (
        <button className="icon-button" onClick={back} aria-label="Volver">
          <Icon name="chevron" size={21}/>
        </button>
      ) : <Logo/>}
      
      <div className="topbar-copy">
        {title && <strong>{title}</strong>}
        {subtitle && <small>{subtitle}</small>}
      </div>
      
      {/* Solo muestra el círculo con la inicial si hay userName */}
      {action || (!back && userName && (
        <button className="avatar" aria-label="Abrir perfil">
          {userName.charAt(0).toUpperCase()}
        </button>
      ))}
    </header>
  );
}