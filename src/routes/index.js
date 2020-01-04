const express = require('express');
const router = express.Router();

// Controllers
// const home = require('../controllers/home');
// const image = require('../controllers/image');
const visitante = require('../controllers/visitante.js');
const departamento = require('../controllers/departamento.js');

module.exports = app => {

    router.get('/visitante', visitante.index);
    router.post('/visitante', visitante.insert);
    router.get('/departamento', departamento.index);
    router.post('/departamento', departamento.insert);
    // router.get('/', home.index);
    // router.get('/images/:image_id', image.index);
    // router.post('/images', image.create);
    // router.post('/images/:image_id/like', image.like);
    // router.post('/images/:image_id/comment', image.comment);
    // router.delete('/images/:image_id', image.remove);

    app.use(router);
};