const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    Name: String,
    Type: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: Date,
    Attachement: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'attachment'
    },
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'client'
    },
    CreatedFor: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'intervention'
    },
    Comment: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'comment'
    },
})

module.exports = mongoose.model('ticket', TicketSchema)