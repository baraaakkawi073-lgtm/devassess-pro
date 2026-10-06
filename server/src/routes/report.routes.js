import { Router } from 'express';
import { getReport, getReportRaw } from '../controllers/report.controller.js';

const router = Router();

router.get('/', getReport);
router.get('/raw', getReportRaw);

export default router;
