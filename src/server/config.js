const path = require('path');
// const morgan = require('morgan'); //ver que lo que está pidiendo el usuario, pinta por consola lo que está pidiendo el usuario, tiempos, etc
const express = require('express');
const cors = require('cors')
const errorHandler = require('errorhandler'); //si visita una ruta desconocida al usuario le pinta un error por pantalla

const routes = require('../routes/index');
//const routes = require('../routes');

module.exports = app => {
    // Settings
    app.set('port', process.env.PORT || 3000);

    // middlewares
    app.use(express.urlencoded({ extended: false })); //recibir datos desde formularios
    app.use(express.json());

    //cors
    app.use(cors())

    // Routes
    routes(app);

    // Static files
    app.use('/public', express.static(path.join(__dirname, '../public'))); //habilito la carpeta public desde los navegadores

    // // Error Handling
    // if ('development' === app.get('env')) {
    //     app.use(errorHandler()); //dejo activado en desarrollo esta libreria
    // }
    return app;
};