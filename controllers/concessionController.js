import Concession from '../models/concessionModel.js';
import mongoose from 'mongoose';
// const Concession = require('../models/concessionModel')
// const mongoose = require('mongoose')

//Get all concessions
export const getConcessions = async (req, res) => {
    const concessions = await Concession.find({})

    res.status(200).json(concessions)
}

//Get a single concession
export const getConcession = async (req, res) => {
    
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such concession found. ObjectId error encountered!'})
    }

    const concession = await Concession.findById(id)

    if (!concession) {
        return res.status(404).json({error: 'No such concession found.'})
    }

    res.status(200).json(concession)
}


//Create new concession
/*
* CAUTION!! Incorrect Usage of The Following Function Might Lead To Altering Map Data
*/
export const createConcession = async (req, res) => {
    //Grabbing the properties from the request body
    const {location, cost, resource, status} = req.body

    // add document to database
    try{
        const concession = await Concession.create({location, cost, resource, status})
        res.status(200).json(concession)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


//Delete a concession
export const deleteConcession = async (req, res) => {
    //Grabbing id from the route parameter
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such concession found. ObjectId error encountered!'})
    }

    //Matching the _id parameter from MongoDB to the id parameter grabbed from routes
    const concession = await Concession.findOneAndDelete({_id: id})

    if (!concession) {
        return res.status(400).json({error: 'No such concession found.'})
    }

    res.status(200).json(concession)
}


//Update a concession
export const updateConcession = async (req, res) => {
    const {id} = req.params

    /*
    * To prevent application crashes
    * MongoDB ObjectID must be a string of 12 bytes or a string of 24 hex characters
    */
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such concession found. ObjectId error encountered!'})
    }

    const concession = await Concession.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!concession) {
        return res.status(400).json({error: 'No such concession found.'})
    }

    res.status(200).json(concession)
}

//Exporting the functions
// module.exports = {
//     getConcessions,
//     getConcession,
//     createConcession,
//     deleteConcession,
//     updateConcession
// }