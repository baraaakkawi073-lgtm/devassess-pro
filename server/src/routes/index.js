import { Router } from 'express';
import config from '../config.js';
import quizRoutes from './quiz.routes.js';
import reportRoutes from './report.routes.js';
import { notFound } from '../middleware/error.middleware.js';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'devassess-pro-api',
    version: config.version,
    environment: config.env,
    uptimeSeconds: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

router.use('/quiz', quizRoutes);
router.use('/report', reportRoutes);
router.use(notFound);

export default router;
