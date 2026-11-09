import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Logo } from "../components/Logo";

export function Profile({ userName, dark, setDark, logged, openAuth, requestLogout, toast, goHelp }) {
  return (
    <main className="screen profile-screen">
      <Header title="Mi espacio" subtitle="Preferencias e impacto" userName={userName}/>
      <section className="profile-card">
        <div className="profile-avatar">
          {userName ? userName.charAt(0).toUpperCase() : <Icon name="user" size={30}/>}
        </div>
        <div>
          <h1>{userName ? userName : "Tu cuenta ECO"}</h1>
          <p>{userName ? "Ecoexplorador · Nivel 3" : "Guarda favoritos y registra tu impacto"}</p>
        </div>
        {!userName && <Button onClick={openAuth}>Entrar</Button>}
      </section>
      <section className="stats-row">
        <div><strong>12</strong><small>Objetos</small></div>
        <div><strong>2,4</strong><small>kg CO₂</small></div>
        <div><strong>3</strong><small>Favoritos</small></div>
      </section>
      <section className="profile-section">
        <h2>Preferencias</h2>
        <div className="setting-row">
          <span className="setting-icon"><Icon name={dark ? "moon" : "sun"} size={20}/></span>
          <span><strong>Modo oscuro</strong><small>Reduce el brillo de la pantalla</small></span>
          <button role="switch" aria-checked={dark} className={dark ? "switch on" : "switch"} onClick={() => setDark(!dark)}><i/></button>
        </div>
        <button className="setting-row" onClick={() => toast("Notificaciones activadas")}>
          <span className="setting-icon"><Icon name="target" size={20}/></span>
          <span><strong>Recordatorios</strong><small>Una recomendación cada semana</small></span>
          <Icon name="chevron" size={18}/>
        </button>
        <button className="setting-row" onClick={() => toast("Ubicación actualizada")}>
          <span className="setting-icon"><Icon name="location" size={20}/></span>
          <span><strong>Mi ubicación</strong><small>Las Palmas de Gran Canaria</small></span>
          <Icon name="chevron" size={18}/>
        </button>
      </section>
      <section className="profile-section">
        <h2>Más información</h2>
        <button className="setting-row" onClick={goHelp}>
          <span className="setting-icon"><Icon name="info" size={20}/></span>
          <span><strong>Sobre EcoGuía</strong><small>Accesibilidad, privacidad y ayuda</small></span>
          <Icon name="chevron" size={18}/>
        </button>
        {logged && (
          <button className="setting-row logout-row" onClick={requestLogout}>
            <span className="setting-icon"><Icon name="logout" size={20}/></span>
            <span><strong>Cerrar sesión</strong><small>Podrás volver cuando quieras</small></span>
            <Icon name="chevron" size={18}/>
          </button>
        )}
      </section>
      <div className="profile-foot"><Logo compact/> <span>Pequeñas acciones. Un impacto enorme.</span></div>
    </main>
  );
}