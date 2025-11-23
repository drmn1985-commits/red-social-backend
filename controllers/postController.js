import Publicacion from "../models/Post.js";

// Crear publicación
export const crearPublicacion = async (req, res) => {
  try {
    const publicacion = new Publicacion(req.body);
    await publicacion.save();
    res.json({ message: "Publicación creada", publicacion });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todas las publicaciones
export const obtenerPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicacion.find();
    res.json(publicaciones);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener publicación por id
export const obtenerPublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    if (!publicacion) return res.status(404).json({ message: "Publicación no encontrada" });
    res.json(publicacion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar publicación
export const actualizarPublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publicacion) return res.status(404).json({ message: "Publicación no encontrada" });
    res.json({ message: "Publicación actualizada", publicacion });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar publicación
export const eliminarPublicacion = async (req, res) => {
  try {
    const publicacion = await Publicacion.findByIdAndDelete(req.params.id);
    if (!publicacion) return res.status(404).json({ message: "Publicación no encontrada" });
    res.json({ message: "Publicación eliminada" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
