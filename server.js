const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Conexión a MongoDB Atlas
mongoose.connect("mongodb+srv://juanpablo:Dibvick20@cluster0.ja9apy2.mongodb.net/redsocial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB Atlas"))
.catch((error) => console.error("❌ Error al conectar con MongoDB:", error));

// ✅ Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor del backend funcionando correctamente ✅");
});

// ✅ Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor del backend corriendo en http://localhost:${PORT}`);
});
