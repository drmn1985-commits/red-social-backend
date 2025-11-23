import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;
const MONGODB_URI = process.env.MONGODB_URI;

// Validación
if (!MONGODB_URI) {
  console.error("❌ ERROR: La variable MONGODB_URI no está definida.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

app.get("/", (req, res) => {
  res.send("Backend funcionando en Render 🚀");
});

app.listen(PORT, () =>
  console.log(`🚀 Servidor backend corriendo en el puerto ${PORT}`)
);
