import mongoose from 'mongoose';

const testPlayerSchema = mongoose.Schema({
    id: Number,
    name: String,
    capital: Number,
    score: {
        type: Number,
        default: 0
    },
    concessions: [Number]
})

const testPlayer = mongoose.model('testPlayer', testPlayerSchema);

export default testPlayer;