const express = require('express');
const config = require('./server/config');
const app = config(express()); //en config tengo toda la configuración

//config
require('./config/config')

// database
require('./database');

// Starting the server
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT)
})