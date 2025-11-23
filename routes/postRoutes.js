import express from "express";
import { 
  crearPublicacion, 
  obtenerPublicaciones, 
  obtenerPublicacion, 
  actualizarPublicacion, 
  eliminarPublicacion 
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", crearPublicacion);
router.get("/", obtenerPublicaciones);
router.get("/:id", obtenerPublicacion);
router.put("/:id", actualizarPublicacion);
router.delete("/:id", eliminarPublicacion);

export default router;
