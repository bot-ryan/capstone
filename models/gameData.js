import mongoose from 'mongoose';
import playerModel from './playerModel.js';
// const mongoose = require('mongoose');
// const playerModel = require('./playerModel');
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

    players: [playerSchema]

    // players: {
    //     type: String,
    //     required: true
    // }
});

export default mongoose.model('gameData', gameDataSchema);

// module.exports = mongoose.model('gameData', gameDataSchema);