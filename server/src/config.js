import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..', '..');

dotenv.config({ path: path.join(rootDir, '.env') });
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: (process.env.NODE_ENV || 'development') === 'production',
  port: Number.parseInt(process.env.PORT, 10) || 5000,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  rateLimitWindowMs: 15 * 60 * 1000,
  rateLimitMax: Number.parseInt(process.env.RATE_LIMIT_MAX, 10) || 300,
  version: pkg.version,
  rootDir,
  reportPath: path.join(rootDir, 'docs', 'Technical_Report.md'),
  reportSource: 'docs/Technical_Report.md',
  clientDist: path.join(rootDir, 'client', 'dist'),
};

export default config;
