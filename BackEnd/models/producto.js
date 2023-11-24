const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductoSchema = new Schema({
    title: {type: String},
    unit_price: {type: Number},
    description: {type: String},
    imagen: {type:String}
})

module.exports = mongoose.models.Producto || mongoose.model('Producto',ProductoSchema);