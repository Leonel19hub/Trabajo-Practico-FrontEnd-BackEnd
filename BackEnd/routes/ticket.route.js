const ticketCtrl = require('./../controllers/ticket.controller');

const express = require('express');
const router = express.Router();

router.get('/', ticketCtrl.getTickets);
router.post('/', ticketCtrl.createTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
router.get('/espectadores/:categoria', ticketCtrl.getEspectadoresByCategoria);

module.exports = router;
