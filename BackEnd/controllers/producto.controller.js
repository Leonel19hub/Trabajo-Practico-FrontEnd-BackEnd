const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find();
    res.json(productos);
};

productoCtrl.getProductoId = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                status: '0',
                msg: 'Producto no encontrado'
            });
        }
        res.json(producto);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando la operación.'
        });
    }
};


productoCtrl.createProducto = async (req, res) => {
    console.log(req.body);
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto eliminado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({ _id: req.body._id }, vproducto);
        res.json({
            'status': '1',
            'msg': 'Producto modificado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

productoCtrl.getProductsDestacados = async (req, res) => {
    const productosDestacados = await Producto.find({ destacado: true });
    res.json(productosDestacados);
};

module.exports = productoCtrl;
