const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    Name: String,
    Description: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'client'
    }
})

module.exports = mongoose.model('comment', CommentSchema)