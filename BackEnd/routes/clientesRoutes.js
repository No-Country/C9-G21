import express from "express";
import {
  registroCliente,
  confirmarCliente,
  modificarContraseña,
  autenticarCliente
} from "../controllers/clientesController.js";

const router = express.Router();

router.post("/register", registroCliente);
router.get("/client/:token", confirmarCliente);
router.put("/putRegister/:id",modificarContraseña);
router.post("/logclient",autenticarCliente);

export default router;
