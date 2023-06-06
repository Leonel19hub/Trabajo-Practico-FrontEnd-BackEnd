const mongoose = require('mongoose');
const { Schema } = mongoose;
const TransaccionSchema = new Schema({
    monedaOrigen: { type: String },
    cantidadOrigen: { type: Number },
    monedaDestino: { type: String },
    cantidadDestino: { type: Number },
    emailCliente: { type: String },
    tasaConversion: { type: Number } // Dato que ingresa el cliente, y se ha utilizado para calcular cantidadDestino.
})

TransaccionSchema.pre('save', function (next) {
    this.cantidadDestino = this.tasaConversion * this.cantidadOrigen;
    next();
});

module.exports = mongoose.models.TransaccionSchema || mongoose.model('Transaccion', TransaccionSchema);