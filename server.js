import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Conexión a MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
  .then(() => console.log('✅ Conexión a MongoDB exitosa'))
  .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// 🔹 Ruta raíz ahora manejada por Express
app.get('/', (req, res) => {
  res.send('🚀 Backend funcionando correctamente ✔️');
});

// 🔹 Ruta de prueba API
app.get('/api/test', (req, res) => {
  res.json({ message: "API funcionando correctamente ✔️" });
});

// 🔹 Para cualquier otra ruta que no exista
app.all('*', (req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
