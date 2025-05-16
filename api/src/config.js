import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost',
  allowedClientUrl: process.env.ALLOWED_CLIENT_URL || 'http://localhost:5173',
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  logDirectory: process.env.LOG_DIRECTORY || 'logs',
};
