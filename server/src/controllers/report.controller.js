import fs from 'node:fs/promises';
import config from '../config.js';
import { ApiError } from '../middleware/error.middleware.js';

async function readReport() {
  try {
    return await fs.readFile(config.reportPath, 'utf8');
  } catch {
    throw ApiError.notFound(
      `Technical report not found at ${config.reportSource} - create it to enable this endpoint`,
    );
  }
}

export async function getReport(_req, res, next) {
  try {
    const markdown = await readReport();
    res.json({
      success: true,
      title: 'DevAssess Pro - Technical Report & Engineering Case Study',
      source: config.reportSource,
      markdown,
    });
  } catch (err) {
    next(err);
  }
}

export async function getReportRaw(_req, res, next) {
  try {
    const markdown = await readReport();
    res.type('text/markdown; charset=utf-8').send(markdown);
  } catch (err) {
    next(err);
  }
}
