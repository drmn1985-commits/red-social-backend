import express from "express";
import { crearPublicacion, obtenerPublicaciones } from "../controllers/postController.js";

const router = express.Router();

// Crear publicación
router.post("/posts", crearPublicacion);

// Obtener todas las publicaciones
router.get("/posts", obtenerPublicaciones);

export default router;
