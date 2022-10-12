import express from 'express';
import { getPlayers, getPlayer, createPlayer, updatePlayer, updatePlayerConcessions } from '../controllers/playerController.js';

const router = express.Router();

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.post('/create', createPlayer);
router.patch('/:id', updatePlayer);
router.patch('/:id/:concessionId', updatePlayerConcessions);

export default router;