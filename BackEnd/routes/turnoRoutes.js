import express from "express";
import {
    crearTurno,
    buscarTurno,
    buscarTurnos,
    actualizarTurno,
    eliminarTurno
} from "../controllers/turnoController.js"

const router = express.Router();

/*Create Turno*/
router.post("/pedir", crearTurno);
/*Buscar turno*/
router.get("/buscar", buscarTurnos);
/*Unico turno*/
router.get("/turno/:id", buscarTurno);
/*Actualizar turno*/
router.put("/actualizarturno/:id", actualizarTurno);
// Eliminar turno
router.delete("/cancelacion/:id", eliminarTurno);

export default router;
