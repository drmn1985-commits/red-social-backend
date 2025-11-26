import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ------------------------------
// 🚀 RUTA DE PRUEBA
// ------------------------------
app.get("/api/test", (req, res) => {
  res.json({
    mensaje: "Backend funcionando correctamente 🎉",
    fecha: new Date().toISOString()
  });
});

// ------------------------------
// 🚀 CONECTAR A MONGO
// ------------------------------
connectDB();

// ------------------------------
// 🚀 INICIAR SERVIDOR
// ------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en el puerto ${PORT}`);
});
