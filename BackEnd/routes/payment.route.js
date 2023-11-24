const express = require('express');
const router = express.Router();
const mercadoPagoCtrl = require('./../controllers/payment.controller');

router.post('/create-orden', mercadoPagoCtrl.createorder);
router.get('/success', (req,res) => res.send('success'));
router.get('/failure', (req,res) => res.send('failure'));
router.get('/pending', (req,res) => res.send('pending'));
router.post('/webhook', mercadoPagoCtrl.receiveWebhook);

module.exports = router;