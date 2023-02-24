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
  perfilNegocio,
  actualizarNegocio1,
  actualizarNegocio2
} from "../controllers/negocioController.js";
import validatorHandler from "../middleware/validator.handler.js";
import ActualizarNegocio2 from "../schemas/negocio2.schema.js";
import actualizarNegocio from "../schemas/user.schema.js";
import crearNegocio from "../schemas/negocio.schema.js";


const router = express.Router();

router.post("/registrar",validatorHandler(crearNegocio,'body') ,registrarNegocio);
router.put("/actualizarNegocio1/:id", validatorHandler(actualizarNegocio, 'body') ,actualizarNegocio1);
router.put("/actualizarNegocio2/:id", validatorHandler(ActualizarNegocio2, 'body') ,actualizarNegocio2);
router.get("/confirmar/:token", confirmarNegocio);
router.get("/buscarServicio", buscarServicios);
router.get('/perfil/:id', perfilNegocio);
//router.put("/putRegister/:id",modificarContraseña);
router.post("/login",autenticarNegocio);
router.post('/password-olvidada', passwordOlvidada);
router.get('/password-olvidada/:token', comprobarToken);
router.post('/password-olvidada/:token', nuevoPassword);
//también se puede hacer en modo chain
//router.route('/password-olvidada/:token/).get(comprobarToken).post(nuevoPassword);


export default router;