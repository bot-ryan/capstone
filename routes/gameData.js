import express from 'express';
import { getGame,getGames,createGame,deleteGame,updateGame, updateGamePlayers } from '../controllers/gameDataController.js';

const router = express.Router();

router.get('/', getGames);
router.get('/:id', getGame);
router.post('/create', createGame);
router.delete('/delete', deleteGame);
router.patch('/:id', updateGame);
router.patch('/:id/:playerId', updateGamePlayers);

export default router;