const express = require('express'),
    TicketRoute = express.Router();
const TicketController = require('../controller/TicketController')

TicketRoute.post('/', TicketController.addTicket);

module.exports = TicketRoute;