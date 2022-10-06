import testPlayer from '../models/testModel.js';

export const getTestPlayer = async (req, res) => {
    try {
        const allTestPlayers = await testPlayer.find();

        res.status(200).json(allTestPlayers);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createTestPlayer = async (req, res) => {
    const testPlayer = req.body;
    const newTestPlayer = new testPlayer(testPlayer);

    try {
        await newTestPlayer.save();
        res.status(201).json(newTestPlayer);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
};