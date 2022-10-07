const Leaderboard = require('../models/leaderboardModel')
const mongoose = require('mongoose')

//Get all Leaderboard entries
const getLeaderboards = async (req, res) => {
    const leaderboards = await Leaderboard.find({})

    res.status(200).json(leaderboards)
}

//Get a single leaderboard entry
const getLeaderboard = async (req, res) => {
    
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such leaderboard entry found. ObjectId error encountered!'})
    }

    const leaderboard = await Leaderboard.findById(id)

    if (!leaderboard) {
        return res.status(404).json({error: 'No such leaderboard entry found.'})
    }

    res.status(200).json(leaderboard)
}


//Create new leaderboard entry
const createLeaderboard = async (req, res) => {
    //Grabbing the properties from the request body
    const {name, score, rank} = req.body

    // add document to database
    try{
        const leaderboard = await Leaderboard.create({name, score, rank})
        res.status(200).json(leaderboard)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


//Delete a leaderboard entry
const deleteLeaderboard = async (req, res) => {
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such leaderboard entry found. ObjectId error encountered!'})
    }

    //Matching the _id parameter from MongoDB to the id parameter grabbed from routes
    const leaderboard = await Leaderboard.findOneAndDelete({_id: id})

    if (!leaderboard) {
        return res.status(400).json({error: 'No such leaderboard entry found.'})
    }

    res.status(200).json(leaderboard)
}


//Update a leaderboard entry
const updateLeaderboard = async (req, res) => {
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such leaderboard entry found. ObjectId error encountered!'})
    }

    const leaderboard = await Leaderboard.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!leaderboard) {
        return res.status(400).json({error: 'No such leaderboard entry found.'})
    }

    res.status(200).json(leaderboard)
}


//Exporting the functions
module.exports = {
    getLeaderboards,
    getLeaderboard,
    createLeaderboard,
    deleteLeaderboard,
    updateLeaderboard
}