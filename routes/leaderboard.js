import express from 'express';
import { getLeaderboards, getLeaderboard, createLeaderboard, deleteLeaderboard, updateLeaderboard } from '../controllers/leaderboardController';

const router = express.Router();

router.get('/', getLeaderboards);
router.get('/:id', getLeaderboard);
router.post('/create', createLeaderboard);
router.delete('/delete', deleteLeaderboard);
router.patch('/:id', updateLeaderboard);

export default router;