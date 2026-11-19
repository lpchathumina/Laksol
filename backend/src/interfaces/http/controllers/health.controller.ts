import { Request, Response } from 'express';
import { ResponseBuilder } from '../../../shared/utils/api-response.js';
import { env } from '../../../infrastructure/config/environment.js';

export class HealthController {
  public check(req: Request, res: Response): void {
    res.status(200).json(
      ResponseBuilder.success(
        {
          status: 'healthy',
          uptime: process.uptime(),
          environment: env.env,
          timestamp: new Date().toISOString(),
        },
        'Server is running smoothly'
      )
    );
  }
}
