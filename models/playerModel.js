import mongoose from 'mongoose';
import concessionModel from './concessionModel.js';
const concessionsSchema = concessionModel.schema;
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
    },
    concessions: [String],
    colour: {
        type: String
    },
    host:{
        type: Boolean
    },
    ready:{
        type: Boolean
    }
    
})

// module.exports = {
//     model: mongoose.model('player', playerSchema),
//     schema: playerSchema
// };
export default mongoose.model('player', playerSchema)