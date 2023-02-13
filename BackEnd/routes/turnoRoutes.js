import express from "express";
import {
    crearTurno,
    confirmarTurno,
    buscarTurnos
} from "../controllers/turnoController.js"

const router = express.Router();

/*Crear Turno*/
router.post("/pedir", crearTurno);
/* Confirmar Turno */
router.get("/confirmar/:Token", confirmarTurno);
/*Buscar turno*/
router.get("/buscar", buscarTurnos);
// /*Unico turno*/
// router.get("/turno/:id", buscarTurno);
// /*Actualizar turno*/
// router.put("/actualizarturno/:id", actualizarTurno);
// // Eliminar turno
// router.delete("/cancelacion/:id", eliminarTurno);

export default router;
