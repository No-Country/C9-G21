import express from "express";
import {
  registroNegocio,
  confirmarNegocio,
  modificarContraseña,
  autenticarNegocio
} from "../controllers/negocioController.js";

const router = express.Router();

router.post("/register", registroNegocio);
router.get("/negocio/:token", confirmarNegocio);
router.put("/putRegister/:id",modificarContraseña);
router.post("/logNegocio",autenticarNegocio);

export default router;