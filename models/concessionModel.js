import mongoose from 'mongoose';
// const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema for the collection named 'concessions' 
const concessionsSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    resource: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    owner: {
        type: String
    }
})

export default mongoose.model('concession', concessionsSchema)

// module.exports = mongoose.model('concession', concessionsSchema)