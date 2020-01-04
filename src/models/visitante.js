const mongoose = require('mongoose');
const { Schema } = mongoose;

const visitanteSchema = new Schema({
    rut: { type: String },
    nombre: { type: String },
    departamento: { type: String },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Visitante', visitanteSchema);