import fs from 'fs';
import { getProjectPath } from '../utils/paths.js';

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Server Error';

  const timestamp = new Date().toISOString();
  const errorLog = `[${timestamp}] ERROR ${status} - ${req.method} ${req.originalUrl} - ${message}\n`;

  console.error(errorLog);

  const errorLogPath = getProjectPath('logs', 'error.log');
  fs.appendFileSync(errorLogPath, errorLog);

  res.status(status).json({
    error: {
      message,
      status,
    },
  });
};
