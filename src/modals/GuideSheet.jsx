import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { items } from "../data/mockData";

export function GuideSheet({ itemId, close, toast }) {
  const item = items.find(value => value.id === itemId) || items[0];
  
  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <section className="sheet detail-sheet" role="dialog" aria-modal="true" aria-label={`Cómo reciclar ${item.name}`}>
        <div className="sheet-handle"/>
        <button className="sheet-close" onClick={close} aria-label="Cerrar"><Icon name="close" size={19}/></button>
        <div className={`detail-hero ${item.tone}`}><span>{item.symbol}</span><small>{item.category}</small></div>
        <div className="detail-body">
          <p className="eyebrow">Guía de reciclaje</p>
          <h1>{item.name}</h1>
          <p className="detail-desc">{item.desc}</p>
          <div className="bin-card">
            <span className={`bin-dot ${item.tone}`}/>
            <div><small>Deposítalo en</small><strong>{item.bin}</strong></div>
            <Icon name="check" size={20}/>
          </div>
          <h2>Antes de reciclar</h2>
          <ol className="steps">
            <li><span>1</span><p><strong>Vacía el contenido</strong><small>Evita que queden restos en el interior.</small></p></li>
            <li><span>2</span><p><strong>Separa las piezas</strong><small>Retira tapas o partes de otro material.</small></p></li>
            <li><span>3</span><p><strong>Deposita sin bolsa</strong><small>Así facilitas el proceso de selección.</small></p></li>
          </ol>
          <Button icon="location" onClick={() => { close(); toast("Abriendo puntos cercanos"); }}>Ver puntos cercanos</Button>
        </div>
      </section>
    </div>
  );
}