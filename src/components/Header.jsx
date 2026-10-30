import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header({ title, subtitle, back, action }) {
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
      
      {action || (!back && <button className="avatar" aria-label="Abrir perfil">G</button>)}
    </header>
  );
}