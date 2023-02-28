import express from "express";
import {
    crearTurno,
    confirmarTurno,
    buscarTurnos,
    eliminarTurno,
    buscarServicios,
    actualizarTurno,
    agregarTurno,
    obtenerTurno,
    obtenerTurnos,
    editarTurno,
    obtenerTurnosNegocio

} from "../controllers/turnoController.js"
import validatorHandlerTurno from "../middleware/validacion.handler.turno.js";
import { validationSchemaTurnos } from "../helpers/validation-turnos.js";
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(checkAuth, obtenerTurnos).post(checkAuth, agregarTurno);

router.route('/:id').get(checkAuth, obtenerTurno).put(checkAuth, editarTurno).delete(checkAuth, eliminarTurno)

router.get("/turnos", obtenerTurnosNegocio)

/*Crear Turno*/
router.post("/pedir", validatorHandlerTurno(validationSchemaTurnos,'body') , crearTurno);
/* Confirmar Turno */
router.get("/confirmar/:token", confirmarTurno);
/*Buscar turno*/
router.get("/buscar", buscarTurnos);
// /*Unico turno*/
router.get("/buscarServicio", buscarServicios);
// /*Actualizar turno*/
router.put("/actualizarturno/:id", actualizarTurno);
/*Eliminar turno*/
router.delete("/cancelacion/:id", eliminarTurno);

export default router;
