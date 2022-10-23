import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import playerRoutes from './routes/player.js';
import concessionRoutes from './routes/concession.js';
import gameDataRoutes from './routes/gameData.js';
import leaderboardRoutes from './routes/leaderboard.js';

const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());
app.use('/player', playerRoutes);
app.use('/concession', concessionRoutes);
app.use('/game', gameDataRoutes);
app.use('/leaderboard', leaderboardRoutes);

/*
//Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

 */   

const CONNECTION_URL = 'mongodb+srv://admin:adminpass123@maincluster.ru7hy9r.mongodb.net/oil_corps';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || CONNECTION_URL).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port: ${PORT}`)
)).catch((err) => console.log(err.message));


//making custom variable inside heroku
if (process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'));
}