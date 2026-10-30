import { Icon } from "./Icon";

export function Button({ children, variant = "primary", icon, onClick, type = "button", disabled = false }) {
  return (
    <button className={`button button--${variant}`} onClick={onClick} type={type} disabled={disabled}>
      {children}{icon && <Icon name={icon} size={18}/>}
    </button>
  );
}