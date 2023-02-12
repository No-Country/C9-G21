import express from "express";
import {
  registrarCliente,
  confirmarCliente,
  modificarContraseña,
  autenticarCliente
} from "../controllers/clientesController.js";
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/registrar-sciente", registrarCliente);
router.get("/confirmar-cliente/:token", confirmarCliente);
router.put("/putRegister/:id",modificarContraseña);
router.post("/login-cliente",autenticarCliente);

export default router;
