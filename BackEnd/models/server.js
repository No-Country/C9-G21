
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const test = require("../routes/test")


class Server {
    constructor() {
        this.app = express();
        //Conectar a base de datos

        // this.conectarDB();
        this.dbConnection()
        //Middlewares
        this.middlewares();

        //Rutas de la app, muy importante cargar primero los middlewares que las rutas,
        //para que se procese adecuadamente el body
        this.port = process.env.PORT || 5000;

        this.routes();
    }
    middlewares() {
        //Cors para ver quien puede acceder a mi api
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }))
        //directorio publico
        // this.app.use(express.static('public'));
    }

    dbConnection() {


    }
    routes() {
        this.app.use('/api/', test.router);

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`escuchando el puerto ${this.port}`);
        });
    }
}

module.exports = Server; 