import express from 'express';
import { getConcessions, getConcession, createConcession, deleteConcession, updateConcession } from '../controllers/concessionController.js';

const router = express.Router();

router.get('/', getConcessions);
router.get('/:id', getConcession);
router.post('/create', createConcession);
router.delete('/delete', deleteConcession);
router.patch('/:id', updateConcession);

export default router;