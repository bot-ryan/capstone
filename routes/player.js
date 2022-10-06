import express from 'express';
import { getPlayers, getPlayer, createPlayer, updatePlayer } from '../controllers/playerController.js';

const router = express.Router();

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.post('/create', createPlayer);
router.patch('/:id', createPlayer);

export default router;