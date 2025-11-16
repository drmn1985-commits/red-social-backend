import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("Cargando...");

  // Obtener la URL del backend desde .env
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${API_URL}/`);
        setMessage(response.data);
      } catch (error) {
        console.error("Error al conectar con el backend:", error);
        setMessage("No se pudo conectar con el backend");
      }
    };

    fetchMessage();
  }, [API_URL]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Red Social Educativa</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
