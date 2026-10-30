import { Icon } from "./Icon";

export function Logo({ compact = false }) {
  return (
    <div className="logo" aria-label="Reverde">
      <span className="logo-mark"><Icon name="leaf" size={compact ? 18 : 22}/></span>
      {!compact && <span>reverde</span>}
    </div>
  );
}