const mongoose = require('mongoose');
const { Schema } = mongoose;
const Espectador = require('./espectador');
const TicketSchema = new Schema({
    precioTicket: { type: Number },
    categoriaEspectador: { type: String }, // e = Extranjeto o l = Local
    fechaCompra: { type: String },
    espectador: {
        type: Schema.Types.ObjectId,
        ref: Espectador, 
        required: true
    }
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);