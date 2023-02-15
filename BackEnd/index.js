//const Server = require("./models/server.js");

//const dotenv = require('dotenv');
//dotenv.config()

//const server = new Server();

//server.listen();

import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";
//modificar routess
import administradorRoutes from './routes/administradorRoutes.js';
import clientesRoutes from './routes/clientesRoutes.js'
import negocioRoutes from './routes/negocioRoutes.js'
import turnoRoutes from './routes/turnoRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();
conectarDB();

app.use('/api/administradores', administradorRoutes);
app.use('/api/clientes',clientesRoutes)
app.use('/api/negocio',negocioRoutes)
app.use('/api/turno',turnoRoutes )

const PORT = process.env.PORT || 5000;
//para escuchar desde el puerto 5000
app.listen(PORT, () =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});
