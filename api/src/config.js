import dotenv from 'dotenv';

dotenv.config();

export const config = {
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost',
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  logDirectory: process.env.LOG_DIRECTORY || 'logs',
};
