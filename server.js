const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 Backend funcionando correctamente en Render!');
});

// Render requiere esto
const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor del backend corriendo en el puerto ${PORT}`);
});
