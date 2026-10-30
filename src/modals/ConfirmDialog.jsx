import { Icon } from "../components/Icon";
import { Button } from "../components/Button";

export function ConfirmDialog({ cancel, confirm }) {
  return (
    <div className="overlay centered">
      <section className="confirm-dialog" role="alertdialog" aria-modal="true">
        <span><Icon name="logout" size={25}/></span>
        <h2>¿Quieres cerrar sesión?</h2>
        <p>Tu progreso está guardado y podrás volver cuando quieras.</p>
        <div>
          <Button variant="secondary" onClick={cancel}>Cancelar</Button>
          <Button variant="danger" onClick={confirm}>Cerrar sesión</Button>
        </div>
      </section>
    </div>
  );
}