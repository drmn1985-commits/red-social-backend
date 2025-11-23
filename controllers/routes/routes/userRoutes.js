import express from "express";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// Crear usuario
router.post("/", async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
