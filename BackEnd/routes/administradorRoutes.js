import express from "express";
//arreglar acá
import {registrar, perfil, confirmar, autenticar}  from '../controllers/administradorController.js';
const router = express.Router();

router.post('/', registrar);

router.get('/perfil', perfil);
//con express puedo agregar un parámetro dinámico con /:
router.get('/confirmar/:token', confirmar);

router.post('/login', autenticar)

export default router;