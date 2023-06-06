const transaccionCtrl = require('../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/cliente/:emailCliente', transaccionCtrl.getAllTransactionOfCustomer);
router.get('/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionSourceTarget);

module.exports = router;