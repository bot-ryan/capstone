const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema for the collection named 'leaderboards' 
const LeaderboardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('leaderboard', LeaderboardSchema)