const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req, res) =>{
    var transacciones = await Transaccion.find();
    res.json(transacciones);
};

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
}

transaccionCtrl.getAllTransactionOfCustomer = async (req, res) => {
    try {
        const { emailCliente } = req.params; // Obtener el valor del parámetro emailCliente de la URL
        
        // Buscar todas las transacciones que coincidan con el emailCliente proporcionado
        const transacciones = await Transaccion.find({ emailCliente: emailCliente });

        res.json(transacciones);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};


transaccionCtrl.getTransaccionSourceTarget = async (req, res) => {
    try {
        const { monedaOrigen, monedaDestino } = req.params; // Obtener los valores de monedaOrigen y monedaDestino de los parámetros de ruta
        
        // Buscar todas las transacciones que coincidan con las divisas de origen y destino proporcionadas
        const transacciones = await Transaccion.find({ monedaOrigen: monedaOrigen, monedaDestino: monedaDestino });

        res.json(transacciones);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};

module.exports = transaccionCtrl;