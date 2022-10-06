const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema for the collection named 'game'
const gameSchema = new Schema({
    game_pin: {
        type: String,
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    players: {
        type: [ObjectId],
        required: true
    }
})

module.exports = mongoose.model('game', gameSchema)