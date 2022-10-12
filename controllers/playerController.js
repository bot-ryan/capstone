// const {Player, playerSchema} = require('../models/playerModel');
// // const Player = require('../models/playerModel');
// const mongoose = require('mongoose');
import Player from '../models/playerModel.js';
import mongoose from 'mongoose';

//Get all players
export const getPlayers = async (req, res) => {
    const players = await Player.find({})

    res.status(200).json(players)
}

//Get a single player
export const getPlayer = async (req, res) => {
    
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such player found. ObjectId error encountered!'})
    }

    const player = await Player.findById(id)

    if (!player) {
        return res.status(404).json({error: 'No such player found.'})
    }

    res.status(200).json(player)
}

//Create new player
export const createPlayer = async (req, res) => {
    //Grabbing the properties from the request body
    const {name, capital, score, concessions, colour, host, ready} = req.body

    // add document to database
    try{
        const player = await Player.create({name, capital, score, concessions, colour, host, ready})
        res.status(200).json(player)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


//Delete a player
export const deletePlayer = async (req, res) => {
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such player found. ObjectId error encountered!'})
    }

    //Matching the _id parameter from MongoDB to the id parameter grabbed from routes
    const player = await Player.findOneAndDelete({_id: id})

    if (!player) {
        return res.status(400).json({error: 'No such player found.'})
    }

    res.status(200).json(player)
}

//Update a player
export const updatePlayer = async (req, res) => {
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such player found. ObjectId error encountered!'})
    }

    const player = await Player.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!player) {
        return res.status(400).json({error: 'No such player found.'})
    }

    res.status(200).json(player)
}

//Add a concession owned
export const updatePlayerConcessions = async (req, res) => {
    const {id,concessionID} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such game found. ObjectId error encountered!'})
    }

    const game = await GameData.findOneAndUpdate({_id: id}, {
        $push: {concessions: concessionID}
    },
    {new: true})

    if (!game) {
        return res.status(400).json({error: 'No such game found.'})
    }

    res.status(200).json(game)
}