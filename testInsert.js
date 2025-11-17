import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// 🔹 Verificar que la variable MONGODB_URI se cargó correctamente
console.log('🔹 URI:', process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI;

// Conexión a MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('✅ Conexión exitosa a MongoDB');

    // Definir un esquema y modelo de prueba
    const testSchema = new mongoose.Schema({ mensaje: String });
    const Test = mongoose.model('Test', testSchema);

    // Crear un documento de prueba
    const doc = new Test({ mensaje: '¡Conexión verificada!' });

    return doc.save(); // Guardar en la DB
  })
  .then(() => {
    console.log('📌 Documento insertado correctamente');
    process.exit(0); // Salir del script
  })
  .catch(err => {
    console.error('❌ Error:', err);
    process.exit(1);
  });
