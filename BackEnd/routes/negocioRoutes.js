import express from "express";
import {
  registrarNegocio,
  confirmarNegocio,
  modificarContraseña,
  autenticarNegocio,
  passwordOlvidada,
  comprobarToken,
  nuevoPassword,
  buscarServicios,
  perfilNegocio
} from "../controllers/negocioController.js";
import validatorHandler from "../middleware/validator.handler.js";
import crearNegocio from "../schemas/user.schema.js";


const router = express.Router();

router.post("/registrar", validatorHandler(crearNegocio, 'body') ,registrarNegocio);
router.get("/confirmar/:token", confirmarNegocio);
router.get("/buscarServicio", buscarServicios);
router.get('/perfil', perfilNegocio);
//router.put("/putRegister/:id",modificarContraseña);
router.post("/login",autenticarNegocio);
router.post('/password-olvidada', passwordOlvidada);
router.get('/password-olvidada/:token', comprobarToken);
router.post('/password-olvidada/:token', nuevoPassword);
//también se puede hacer en modo chain
//router.route('/password-olvidada/:token/).get(comprobarToken).post(nuevoPassword);


export default router;