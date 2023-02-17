import express from "express";
import {
  registroNegocio,
  confirmarNegocio,
  modificarContraseña,
  autenticarNegocio,
  passwordOlvidada,
  comprobarToken,
  nuevoPassword,
  buscarServicios
} from "../controllers/negocioController.js";

const router = express.Router();

router.post("/registrar", registroNegocio);
router.get("/negocio/:token", confirmarNegocio);
router.get("/buscarServicio", buscarServicios);
router.put("/putRegister/:id",modificarContraseña);
router.post("/logNegocio",autenticarNegocio);
router.post('/password-olvidada', passwordOlvidada);
router.get('/password-olvidada/:token', comprobarToken);
router.post('/password-olvidada/:token', nuevoPassword);
//también se puede hacer en modo chain
//router.route('/password-olvidada/:token/).get(comprobarToken).post(nuevoPassword);


export default router;