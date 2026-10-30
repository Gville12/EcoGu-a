import { Header } from "../components/Header";
import { Icon } from "../components/Icon";

export function HelpScreen({ goBack }) {
  return (
    <main className="screen">
      <Header title="Ayuda" subtitle="Soporte y preguntas frecuentes" back={goBack} />
      <div className="profile-section">
        <h2>¿Cómo podemos ayudarte?</h2>
        <button className="setting-row" onClick={() => alert("Abriendo chat de soporte...")}>
          <span className="setting-icon"><Icon name="info" size={20}/></span>
          <span><strong>Contactar con soporte</strong><small>Escríbenos un correo</small></span>
          <Icon name="chevron" size={18}/>
        </button>
        <button className="setting-row" onClick={() => alert("Cargando preguntas frecuentes...")}>
          <span className="setting-icon"><Icon name="search" size={20}/></span>
          <span><strong>Preguntas frecuentes</strong><small>Resuelve tus dudas rápidamente</small></span>
          <Icon name="chevron" size={18}/>
        </button>
      </div>
    </main>
  );
}