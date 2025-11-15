// Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Crear la app de Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 Backend funcionando correctamente en Render!');
});

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error al conectar MongoDB:', err));

// Puerto dinámico para Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
