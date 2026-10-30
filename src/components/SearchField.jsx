import { Icon } from "./Icon";

export function SearchField({ value, onChange, onFocus, autoFocus = false }) {
  return (
    <label className="search-field">
      <Icon name="search" size={20}/>
      <input 
        aria-label="Buscar residuo" 
        placeholder="¿Qué quieres reciclar?" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        onFocus={onFocus} 
        autoFocus={autoFocus}
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="Borrar búsqueda">
          <Icon name="close" size={17}/>
        </button>
      )}
    </label>
  );
}