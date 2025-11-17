import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error conectando a MongoDB:", err));

// Rutas
app.use("/api", userRoutes);
app.use("/api", postRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Bienvenido al backend de la red social 🚀");
});

// Ruta 404
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Puerto Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Backend corriendo en el puerto ${PORT}`));
