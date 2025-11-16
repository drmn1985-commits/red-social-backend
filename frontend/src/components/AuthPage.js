// src/components/AuthPage.js
import React, { useState } from "react";

const AuthPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    if (!email.trim()) {
      setError("Por favor ingresa tu correo.");
      return;
    }
    setError("");
    onLogin(email.trim());
  };

  return (
    <div style={{
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center",
      backgroundColor: "#ffffff"
    }}>
      <h2 style={{ marginBottom: "20px", color: "#4f46e5" }}>Bienvenido a la red social</h2>
      
      <input
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />
      
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <button
        onClick={handleLoginClick}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Iniciar sesión
      </button>
    </div>
  );
};

export default AuthPage;
