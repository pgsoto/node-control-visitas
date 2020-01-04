const ctrl = {}; //objeto controller

const { Visitante } = require('../models');

ctrl.index = async(req, res) => {
    Visitante.find()
        .exec((err, visitantes) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                visitantes
            })
        })
};

ctrl.insert = async(req, res) => {
    let body = req.body

    let visitante = new Visitante({
        nombre: body.nombre,
        rut: body.rut,
        departamento: body.departamento,
    })

    visitante.save((err, visitanteDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.status(201).json({
            ok: true,
            visitante: visitanteDB
        })

    })
};

module.exports = ctrl; //lo exporto