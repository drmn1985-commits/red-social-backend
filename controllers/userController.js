import User from "../models/User.js";

// Crear usuario
export const crearUsuario = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Usuario creado", data: req.body });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener usuario por id
export const obtenerUsuario = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar usuario
export const actualizarUsuario = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json({ message: "Usuario actualizado", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
