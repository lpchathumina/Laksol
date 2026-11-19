import { env } from './infrastructure/config/environment.js';
import { createExpressApp } from './infrastructure/webserver/express-app.js';
import { InMemoryProductRepository } from './infrastructure/database/in-memory/in-memory-product.repository.js';
import { InMemoryCategoryRepository } from './infrastructure/database/in-memory/in-memory-category.repository.js';
import { InMemoryContactRepository } from './infrastructure/database/in-memory/in-memory-contact.repository.js';
import { InMemoryOrderRepository } from './infrastructure/database/in-memory/in-memory-order.repository.js';
import { logger } from './shared/utils/logger.js';

const bootstrap = async (): Promise<void> => {
  try {
    // 1. Initialize repositories (Infrastructure layer)
    const productRepository = new InMemoryProductRepository();
    const categoryRepository = new InMemoryCategoryRepository();
    const contactRepository = new InMemoryContactRepository();
    const orderRepository = new InMemoryOrderRepository();

    // 2. Initialize web server with dependencies (Dependency Injection)
    const app = createExpressApp({
      productRepository,
      categoryRepository,
      contactRepository,
      orderRepository,
    });

    // 3. Start listening on configured host and port from environment
    app.listen(env.port, env.host, () => {
      logger.info(`====================================================`);
      logger.info(`🚀 Server running in [${env.env}] mode`);
      logger.info(`📡 Listening on: http://${env.host}:${env.port}`);
      logger.info(`🔗 API Prefix: ${env.apiPrefix}`);
      logger.info(`🌐 Allowed CORS: ${env.cors.allowedOrigins.join(', ') || 'ALL'}`);
      logger.info(`====================================================`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

bootstrap();
