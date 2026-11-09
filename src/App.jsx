import { useState } from "react";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { MapScreen } from "./pages/MapScreen";
import { Profile } from "./pages/Profile";
import { HelpScreen } from "./pages/HelpScreen";
import { ErrorScreen } from "./pages/ErrorScreen";
import { BottomNav } from "./components/BottomNav";
import { Icon } from "./components/Icon";
import { GuideSheet } from "./modals/GuideSheet";
import { PointSheet } from "./modals/PointSheet";
import { AuthSheet } from "./modals/AuthSheet";
import { ConfirmDialog } from "./modals/ConfirmDialog";
import { useOnlineStatus } from "./hooks/useOnlineStatus";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [dark, setDark] = useState(false);
  const [guide, setGuide] = useState(null);
  const [point, setPoint] = useState(null);
  const [auth, setAuth] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [message, setMessage] = useState("");
  
  const [userName, setUserName] = useState(sessionStorage.getItem("nombre") || null);
  const logged = userName !== null;
  
  const isOnline = useOnlineStatus();

  const showToast = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2600);
  };

  return (
    <div className={dark ? "app-shell dark" : "app-shell"}>
      <div className="mobile-app">
        
        {activePage === "home" && (
          <Home 
            userName={userName} 
            openSearch={() => setActivePage("explore")} 
            openGuide={setGuide} 
            goMap={() => setActivePage("map")}
          />
        )}

        {activePage === "explore" && (
          <Explore 
            userName={userName}
            query={query} 
            setQuery={setQuery} 
            category={category} 
            setCategory={setCategory} 
            openGuide={setGuide}
          />
        )}

        {activePage === "map" && <MapScreen userName={userName} selectPoint={setPoint} />}

        {activePage === "profile" && (
          <Profile 
            userName={userName}
            dark={dark} 
            setDark={setDark} 
            logged={logged} 
            openAuth={() => setAuth(true)} 
            requestLogout={() => setConfirm(true)} 
            toast={showToast} 
            goHelp={() => setActivePage("help")}
          />
        )}
        
        {activePage === "help" && <HelpScreen goBack={() => setActivePage("profile")} />}
        {activePage === "error" && <ErrorScreen goHome={() => setActivePage("home")} />}

        <BottomNav active={activePage} setActive={setActivePage} />
        
        <button 
          className="scan-button" 
          onClick={() => { setActivePage("explore"); showToast("Escribe el objeto para identificarlo"); }} 
          aria-label="Identificar objeto"
        >
          <Icon name="scan" size={24} />
        </button>
        
        {!isOnline && (
          <div className="offline-banner" role="alert">
            <Icon name="info" size={18} />
            <span>
              <strong>Sin conexión</strong>
              <small>Puedes consultar las guías guardadas.</small>
            </span>
          </div>
        )}
        
        {guide && (
          <GuideSheet 
            itemId={guide} 
            close={() => setGuide(null)} 
            toast={(text) => { showToast(text); setActivePage("map"); }} 
          />
        )}
        
        {point && (
          <PointSheet 
            pointId={point} 
            close={() => setPoint(null)} 
            toast={showToast} 
          />
        )}
        
        {auth && (
          <AuthSheet 
            close={() => setAuth(false)} 
            success={(data) => { 
              console.log("Datos recibidos del login:", data); // <-- AÑADE ESTO PARA VER QUÉ LLEGA
              setAuth(false); 
              setUserName(data.nombre); 
              showToast(data.isRegister ? "Cuenta creada y datos guardados" : "Sesión iniciada correctamente"); 
            }}
          />
        )}
        
        {confirm && (
          <ConfirmDialog 
            cancel={() => setConfirm(false)} 
            confirm={() => { 
              setConfirm(false); 
              setUserName(null); 
              sessionStorage.clear(); 
              showToast("Has cerrado sesión"); 
            }}
          />
        )}
        
        {message && (
          <div className="toast" role="status">
            <Icon name="check" size={17} />
            {message}
          </div>
        )}
        
      </div>
    </div>
  );
}