import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from '../config/environment.js';
import { RouteDependencies, createApiRouter } from '../../interfaces/http/routes/index.js';
import { errorHandler } from '../../interfaces/http/middlewares/error.middleware.js';
import { notFoundHandler } from '../../interfaces/http/middlewares/not-found.middleware.js';
import { logger } from '../../shared/utils/logger.js';

export const createExpressApp = (deps: RouteDependencies): Express => {
  const app = express();

  // Security headers
  app.use(helmet());

  // Dynamic CORS configuration using environment variables
  const corsOptions: CorsOptions = {
    origin: (requestOrigin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!requestOrigin) return callback(null, true);

      // If allowed origins are defined in env, enforce match
      if (env.cors.allowedOrigins.length > 0) {
        const isAllowed = env.cors.allowedOrigins.some(origin => {
          return origin === '*' || origin === requestOrigin;
        });

        if (isAllowed) {
          return callback(null, true);
        } else {
          logger.warn(`CORS rejected origin: ${requestOrigin}`);
          return callback(new Error(`Origin '${requestOrigin}' not allowed by CORS`));
        }
      }

      // Default in development: allow
      callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  };

  app.use(cors(corsOptions));

  // Logging & Body Parsers
  if (!env.isProduction) {
    app.use(morgan('dev'));
  }
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Root welcome route
  app.get('/', (req, res) => {
    res.json({
      name: 'PodiMama & Laksol Backend API',
      status: 'active',
      environment: env.env,
      endpoints: `${env.apiPrefix}`,
      documentation: `${env.apiPrefix}/health`,
    });
  });

  // Mount API Router under configured prefix
  app.use(env.apiPrefix, createApiRouter(deps));

  // 404 & Global Error Middlewares
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
