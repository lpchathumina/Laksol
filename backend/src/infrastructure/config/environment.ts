import dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config();

export interface EnvironmentConfig {
  env: string;
  isProduction: boolean;
  port: number;
  host: string;
  apiPrefix: string;
  cors: {
    allowedOrigins: string[];
  };
  clientUrl: string;
  adminUrl: string;
}

const parseOrigins = (raw?: string): string[] => {
  if (!raw) return [];
  return raw
    .split(',')
    .map(o => o.trim())
    .filter(Boolean);
};

export const env: EnvironmentConfig = {
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT || '5000', 10),
  host: process.env.HOST || '0.0.0.0',
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  cors: {
    allowedOrigins: parseOrigins(process.env.CORS_ORIGIN),
  },
  clientUrl: process.env.CLIENT_URL || '',
  adminUrl: process.env.ADMIN_URL || '',
};
