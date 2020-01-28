const mongoose = require('mongoose');
const { Schema } = mongoose;

const visitanteSchema = new Schema({
    rut: { type: String },
    nombre: { type: String },
    departamento: { type: Schema.Types.ObjectId, ref: 'Departamento', required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Visitante', visitanteSchema);