const express = require('express');
const router = express.Router();

// Controllers
const visitante = require('../controllers/visitante.js');
const departamento = require('../controllers/departamento.js');

module.exports = app => {

    router.get('/visitante', visitante.index);
    router.post('/visitante', visitante.insert);
    router.get('/departamento', departamento.index);
    router.post('/departamento', departamento.insert);

    app.use(router);
};