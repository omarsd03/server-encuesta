const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require('path');

const mongoose = require("./database");

// Configuraciones
app.set("port", process.env.PORT || 3000);

// Cabeceras y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Rutas
app.use(require("./routes/encuesta.routes"));

// Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto", app.get("port"));
});