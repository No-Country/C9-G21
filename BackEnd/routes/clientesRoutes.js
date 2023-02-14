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

router.post("/registrar-cliente", registrarCliente);
router.get("/perfil-cliente",perfilCliente)
router.get("/confirmar-cliente/:token", confirmarCliente);
router.post("/login-cliente",autenticarCliente);
router.post("/password-cliente-olvidada",passwordClienteOlvidada)
router.get("/password-cliente-olvidada/:token", comprobarTokenCliente);
router.post("/password-cliente-olvidada/:token",  nuevoPasswordCliente);

router.get('/perfil-cliente', checkAuth, perfilCliente);
export default router;