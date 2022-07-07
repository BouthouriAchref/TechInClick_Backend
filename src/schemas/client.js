const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    Name: String
})

module.exports = mongoose.model('ticket', TicketSchema)