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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (register && name.trim().length < 2) {
      setError("Escribe tu nombre para crear la cuenta.");
      setLoading(false);
      return;
    }
    if (!email.includes("@")) {
      setError("Escribe un correo válido que incluya @.");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      setLoading(false);
      return;
    }

    const url = register 
      ? "http://localhost:8080/auth/register" 
      : "http://localhost:8080/auth/login";

    const bodyData = register 
      ? { nombre: name, email: email, password: password }
      : { email: email, password: password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData)
      });

      if (response.ok) {
        const data = await response.json(); // Leemos JSON
        
        // GUARDAMOS EN SESSION STORAGE
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("nombre", data.nombre);
        
        // ENVIAMOS EL OBJETO (¡No un booleano!)
        success({ isRegister: register, nombre: data.nombre }); 
      } else {
        const errorText = await response.text();
        setError(errorText);
      }
    } catch (err) {
      setError("No hay conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="overlay">
      <section className="sheet auth-sheet" role="dialog" aria-modal="true" aria-label="Acceso a EcoGuía">
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
          
          <Button type="submit" disabled={loading}>
            {loading ? "Procesando..." : (register ? "Crear cuenta" : "Iniciar sesión")}
          </Button>
        </form>
        
        <button className="auth-switch" onClick={() => { setRegister(!register); setError(""); }}>
          {register ? "¿Ya tienes cuenta? Inicia sesión" : "¿Aún no tienes cuenta? Regístrate"}
        </button>
      </section>
    </div>
  );
}