import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [photoURL, setPhotoURL] = useState(localStorage.getItem("userPhoto") || "https://via.placeholder.com/150");
  const [editing, setEditing] = useState(false);

  // Guardar los datos localmente
  useEffect(() => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userPhoto", photoURL);
  }, [name, photoURL]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Simulación: crea una URL temporal (no se sube a la nube)
    const localURL = URL.createObjectURL(file);
    setPhotoURL(localURL);
  };

  const handleSave = () => {
    setEditing(false);
    alert("✅ Perfil actualizado correctamente (modo simulado).");
  };

  const handleLogout = async () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userPhoto");
    navigate("/"); // Redirige al login
  };

  return (
    <div style={styles.container}>
      <h2>Perfil de Usuario</h2>

      <img src={photoURL} alt="Foto de perfil" style={styles.avatar} />

      {editing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            style={styles.input}
          />
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          <button onClick={handleSave} style={styles.button}>Guardar</button>
        </>
      ) : (
        <>
          <h3>{name || "Sin nombre configurado"}</h3>
          <p>{user?.email}</p>
          <button onClick={() => setEditing(true)} style={styles.button}>Editar Perfil</button>
        </>
      )}

      <br />
      <button onClick={handleLogout} style={styles.logout}>Cerrar Sesión</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
  },
  logout: {
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Profile;
