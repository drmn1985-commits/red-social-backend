import express from "express";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// Crear usuario
router.post("/", async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json({ message: "Usuario creado", data: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
