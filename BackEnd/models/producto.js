const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductoSchema = new Schema({
    nombre: {type: String},
    descripcion: {type: String},
    imagen: {type: String},
    precio: {type: Number},
    stock: {type:Number},
    destacado: {type: Boolean}
})

module.exports = mongoose.models.Producto || mongoose.model('Producto',ProductoSchema);