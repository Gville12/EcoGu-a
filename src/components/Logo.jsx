import logoImage from "../assets/logo-ecoguia.png"; // Tu ruta de imagen

export function Logo({ compact = false }) {
  return (
    <div className="logo" aria-label="EcoGuía">
      <img 
        src={logoImage} 
        alt="Logo EcoGuía" 
        style={{ 
          width: 'auto',
          height: compact ? '42px' : '55px', 
          objectFit: 'contain' 
        }} 
      />
    </div>
  );
}