const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    username: { type: String, required: true }, 
    password: { type: String, required: true },
    rol: { type: String, require: true }
});

//exporto objeto para que pueda ser usado en otros lugares 
module.exports = mongoose.model('Usuario', UsuarioSchema);