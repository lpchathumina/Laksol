import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../shared/errors/app-error.js';
import { ResponseBuilder } from '../../../shared/utils/api-response.js';
import { logger } from '../../../shared/utils/logger.js';

export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  if (err instanceof AppError) {
    logger.warn(`Operational Error: ${err.message} [${req.method} ${req.originalUrl}]`);
    res.status(err.statusCode).json(
      ResponseBuilder.error(err.message, `STATUS_${err.statusCode}`)
    );
    return;
  }

  logger.error(`Unhandled Error: ${err.message} [${req.method} ${req.originalUrl}]`, err.stack);
  res.status(500).json(
    ResponseBuilder.error('Internal server error occurred. Please try again later.')
  );
};
