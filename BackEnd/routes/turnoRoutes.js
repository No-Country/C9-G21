import express from "express";
import {
    crearTurno,
    confirmarTurno,
    buscarTurnos,
    eliminarTurno,
    buscarServicios,
    actualizarTurno
} from "../controllers/turnoController.js"
import validatorHandlerTurno from "../middleware/validacion.handler.turno.js";
import { validationSchemaTurnos } from "../helpers/validation-turnos.js";


const router = express.Router();

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
