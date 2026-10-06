import { Router } from 'express';
import { checkAnswer, evaluate, getCategories, getQuestions } from '../controllers/quiz.controller.js';

const router = Router();

router.get('/categories', getCategories);
router.post('/:categoryId/check', checkAnswer);
router.post('/:categoryId/evaluate', evaluate);
router.get('/:categoryId', getQuestions);

export default router;
