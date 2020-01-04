const mongoose = require('mongoose');
const { Schema } = mongoose;

const departamentoSchema = new Schema({
    numero: { type: Number, unique: true, required: true }
});

module.exports = mongoose.model('Departamento', departamentoSchema);