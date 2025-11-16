// src/App.js
import React, { useState, useEffect } from "react";
import AuthPage from "./components/AuthPage";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  // Verifica si hay usuario guardado en localStorage al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogin = (email) => {
    setUser(email);
    localStorage.setItem("user", email); // guarda sesión
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // cierra sesión
  };

  return (
    <div>
      {user ? <Home user={user} onLogout={handleLogout} /> : <AuthPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
