import express from 'express';
import { getTestPlayer, createTestPlayer } from '../controllers/mainScreen.js';

const router = express.Router();

router.get('/', getTestPlayer);
router.post('/', createTestPlayer);

export default router;