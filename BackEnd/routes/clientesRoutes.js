import express from "express";
import {
  registrarCliente,
  confirmarCliente,
  autenticarCliente,
  passwordClienteOlvidada,
  comprobarTokenCliente,
  nuevoPasswordCliente,
  perfilCliente
} from "../controllers/clientesController.js";
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/registrar", registrarCliente);
router.get("/perfil",perfilCliente)
router.get("/confirmar-/:token", confirmarCliente);
router.post("/login",autenticarCliente);
router.post("/password-olvidada",passwordClienteOlvidada)
router.get("/password-olvidada/:token", comprobarTokenCliente);
router.post("/password-olvidada/:token",  nuevoPasswordCliente);

router.get('/perfil-cliente', checkAuth, perfilCliente);
export default router;