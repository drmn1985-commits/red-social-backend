import mongoose from "mongoose";

const publicacionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  autor: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

const Publicacion = mongoose.model("Publicacion", publicacionSchema);
export default Publicacion;
