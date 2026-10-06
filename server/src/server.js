import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import config from './config.js';
import apiRoutes from './routes/index.js';
import { errorHandler, notFound } from './middleware/error.middleware.js';

const app = express();

app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", 'data:'],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        imgSrc: ["'self'", 'data:', 'blob:'],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginResourcePolicy: { policy: 'same-origin' },
  }),
);

const allowedOrigins = config.clientOrigin
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      callback(null, !origin || allowedOrigins.includes(origin));
    },
  }),
);

if (config.env !== 'test') {
  app.use(morgan(config.isProd ? 'combined' : 'dev'));
}

app.use(express.json({ limit: '100kb' }));

if (config.env !== 'test') {
  app.use(
    '/api',
    rateLimit({
      windowMs: config.rateLimitWindowMs,
      limit: config.rateLimitMax,
      standardHeaders: 'draft-7',
      legacyHeaders: false,
      message: { success: false, error: { message: 'Too many requests, please try again later.' } },
    }),
  );
}

app.use('/api', apiRoutes);

const distDir = config.clientDist;
const hasBuiltClient = fs.existsSync(path.join(distDir, 'index.html'));

if (hasBuiltClient) {
  app.use(express.static(distDir));
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.use(notFound);
app.use(errorHandler);

const server = app.listen(config.port, () => {
  console.log(`DevAssess Pro API v${config.version} listening on http://localhost:${config.port} [${config.env}]`);
  console.log(`Health check: http://localhost:${config.port}/api/health`);
  console.log(
    hasBuiltClient
      ? `Serving production web client from client/dist`
      : `Web client not built yet - run "npm run build" to serve it from this server`,
  );
});

function shutdown(signal) {
  console.log(`\n${signal} received, shutting down gracefully...`);
  server.close(() => process.exit(0));
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));

export default app;
