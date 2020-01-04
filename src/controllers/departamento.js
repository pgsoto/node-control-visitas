const ctrl = {}; //objeto controller

const { Departamento } = require('../models');

ctrl.index = async(req, res) => {
    console.log('listar departamentos')
    Departamento.find()
        .exec((err, departamentos) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                departamentos
            })
        })
};

ctrl.insert = async(req, res) => {
    console.log('insertar departamento')
    let body = req.body

    let departamento = new Departamento({
        numero: body.numero,
    })

    departamento.save((err, departamentoDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.status(201).json({
            ok: true,
            departamento: departamentoDB
        })

    })
};

module.exports = ctrl; //lo exporto