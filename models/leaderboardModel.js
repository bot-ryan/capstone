import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Schema for the collection named 'leaderboards' 
const LeaderboardSchema = new Schema({
    gameID: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    rank: {
        type: Number
    }
})

export default mongoose.model('leaderboard', LeaderboardSchema);