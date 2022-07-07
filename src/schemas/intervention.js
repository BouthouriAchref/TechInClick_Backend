const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterventionSchema = new Schema({
    Name: String
})

module.exports = mongoose.model('intervention', InterventionSchema)