import GameData from '../models/gameData.js';
import mongoose from 'mongoose';

//Get all GameData
export const getGames = async (req, res) => {
    const games = await GameData.find({})

    res.status(200).json(games)
}

//Get a single GameData
export const getGame = async (req, res) => {
    
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such game found. ObjectId error encountered!'})
    }

    const game = await GameData.findById(id)

    if (!game) {
        return res.status(404).json({error: 'No such game found.'})
    }

    res.status(200).json(game)
}

//Create new game
export const createGame = async (req, res) => {
    //Grabbing the properties from the request body
    const {gamePin, round, maxRounds, players, host} = req.body

    // add document to database
    try{
        const game = await GameData.create({gamePin, round, maxRounds, players, host})
        res.status(200).json(game)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


//Delete a game
export const deleteGame = async (req, res) => {
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such game found. ObjectId error encountered!'})
    }

    //Matching the _id parameter from MongoDB to the id parameter grabbed from routes
    const game = await GameData.findOneAndDelete({_id: id})

    if (!game) {
        return res.status(400).json({error: 'No such game found.'})
    }

    res.status(200).json(game)
}

//Update a game
export const updateGame = async (req, res) => {
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such game found. ObjectId error encountered!'})
    }

    const game = await GameData.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!game) {
        return res.status(400).json({error: 'No such game found.'})
    }

    res.status(200).json(game)
}

//Add a player to game
export const updateGamePlayers = async (req, res) => {
    const {id,playerId} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such game found. ObjectId error encountered!'})
    }

    const game = await GameData.findOneAndUpdate({_id: id}, {
        $push: {players: playerId}
    },
    {new: true})

    if (!game) {
        return res.status(400).json({error: 'No such game found.'})
    }

    res.status(200).json(game)
}
 
// //Exporting the functions
// module.exports = {
//     getGames,
//     getGame,
//     createGame,
//     deleteGame,
//     updateGame
// }