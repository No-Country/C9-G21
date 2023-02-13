const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const test = require("../routes/test");
const morgan = require("morgan");
const db = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    //Conectar a base de datos

    // this.conectarDB();
    this.dbConnection();
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
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
      );
      next();
    });
    // Morgan para ver las peticiones de la api
    this.app.use(morgan("dev"));
    // Lectura y parseo del body
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    //directorio publico
    // this.app.use(express.static('public'));
  }

  dbConnection() {
    
  }

  routes() {
    this.app.use("/api/", test);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`escuchando el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
