import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Schema for the collection named 'player'
const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    capital: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
    
})

// module.exports = {
//     model: mongoose.model('player', playerSchema),
//     schema: playerSchema
// };
export default mongoose.model('player', playerSchema)