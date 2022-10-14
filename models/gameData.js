import mongoose from 'mongoose';
import playerModel from './playerModel.js';
const playerSchema = playerModel.schema;
const Schema = mongoose.Schema;

//Schema for the collection named 'gameData' 
const gameDataSchema = new Schema({
    gamePin: {
        type: String,
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    maxRounds: {
        type: Number,
        required: true
    },
    players: [String],
    host: {
        type: String,
        required: true
    }
});

export default mongoose.model('gameData', gameDataSchema);