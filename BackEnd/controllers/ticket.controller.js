const Ticket = require('../models/tickets');
const ticketCtrl = {};

ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
};

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket eliminado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket modificado'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

ticketCtrl.getEspectadoresByCategoria = async (req, res) => {
    try {
      const { categoria } = req.params; // Obtener el valor de la categoría desde los parámetros de la URL
  
      // Realizar la consulta en el modelo Ticket y realizar la referencia cruzada con el modelo Espectador
      const tickets = await Ticket.find({ categoriaEspectador: categoria }).populate("espectador");
  
      // Obtener solo los espectadores de los tickets encontrados
      const espectadores = tickets.map((ticket) => ticket.espectador);
  
      res.json(espectadores);
    } catch (error) {
      res.status(400).json({
        status: '0',
        msg: 'Error procesando la operación.',
      });
    }
  };
  

module.exports = ticketCtrl;