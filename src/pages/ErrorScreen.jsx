import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

export function ErrorScreen({ goHome }) {
  return (
    <main className="screen" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="empty-state" style={{ padding: 0 }}>
        <span style={{ background: '#fae8e5', color: '#b94942', width: '80px', height: '80px', display: 'grid', placeItems: 'center', borderRadius: '20px', margin: 'auto' }}>
          <Icon name="info" size={40}/>
        </span>
        <h1 style={{ fontSize: '48px', margin: '20px 0 0', fontFamily: 'Manrope', fontWeight: 800 }}>404</h1>
        <h2>Página no encontrada</h2>
        <p>La ruta a la que intentas acceder no existe o ha sido movida.</p>
        <Button onClick={goHome}>Volver al Inicio</Button>
      </div>
    </main>
  );
}