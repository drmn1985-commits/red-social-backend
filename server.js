import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ RUTA DE PRUEBA
app.get("/api/test", (req, res) => {
  res.status(200).json({
    mensaje: "Backend funcionando correctamente 🎉",
    fecha: new Date().toISOString()
  });
});

// Conectar DB
connectDB();

// Render asigna el puerto automáticamente
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en el puerto ${PORT}`);
});
