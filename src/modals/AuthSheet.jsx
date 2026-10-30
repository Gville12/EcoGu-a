import { useState } from "react";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export function AuthSheet({ close, success }) {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (register && name.trim().length < 2) return setError("Escribe tu nombre para crear la cuenta.");
    if (!email.includes("@")) return setError("Escribe un correo válido que incluya @.");
    if (password.length < 6) return setError("La contraseña debe tener al menos 6 caracteres.");
    success(register);
  }
  
  return (
    <div className="overlay">
      <section className="sheet auth-sheet" role="dialog" aria-modal="true" aria-label="Acceso a Reverde">
        <div className="sheet-handle"/>
        <button className="sheet-close" onClick={close} aria-label="Cerrar"><Icon name="close" size={19}/></button>
        <Logo/>
        <h1>{register ? "Crea tu cuenta" : "Qué bueno verte"}</h1>
        <p>{register ? "Empieza a medir tu impacto positivo." : "Accede a tus favoritos y a tu progreso."}</p>
        <form onSubmit={handleSubmit} noValidate>
          {register && (
            <label className="form-field">
              <span>Nombre <i>Obligatorio</i></span>
              <input placeholder="Tu nombre" value={name} onChange={e => { setName(e.target.value); setError(""); }} autoComplete="name" required/>
            </label>
          )}
          <label className="form-field">
            <span>Correo electrónico</span>
            <input type="email" placeholder="nombre@correo.com" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} autoComplete="email"/>
          </label>
          <label className="form-field">
            <span>Contraseña</span>
            <input type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={e => { setPassword(e.target.value); setError(""); }} autoComplete={register ? "new-password" : "current-password"}/>
          </label>
          {error && <p className="form-error" role="alert"><Icon name="info" size={17}/>{error}</p>}
          <Button type="submit">{register ? "Crear cuenta" : "Iniciar sesión"}</Button>
        </form>
        <button className="auth-switch" onClick={() => { setRegister(!register); setError(""); }}>
          {register ? "¿Ya tienes cuenta? Inicia sesión" : "¿Aún no tienes cuenta? Regístrate"}
        </button>
      </section>
    </div>
  );
}