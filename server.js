// ----------------------------
// Backend para Render (listo)
// ----------------------------

require('dotenv').config();       // Cargar variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Puerto dinámico para Render
const PORT = process.env.PORT || 10000;

// Obtener la URI de MongoDB desde Render
const MONGO_URI = process.env.MONGODB_URI;

// Validación por si no existe
if (!MONGO_URI) {
  console.error("❌ ERROR: La variable MONGODB_URI no está definida.");
  process.exit(1);
}

// Conectar a MongoDB Atlas
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ Error conectando a MongoDB:", err);
    process.exit(1);
  });

// Ruta simple para probar el backend
app.get("/", (req, res) => {
  res.send("🚀 Backend funcionando correctamente en Render");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor del backend corriendo en el puerto ${PORT}`);
});
