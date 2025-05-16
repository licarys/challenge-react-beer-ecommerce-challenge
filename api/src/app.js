import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import routes from './routers/index.router.js';
import logger from './middlewares/logger.js';
import morgan from 'morgan';
import { errorHandler, notFound } from './middlewares/error-handler.js';
import { getProjectPath } from './utils/paths.js';

dotenv.config();

const app = express();

const accessLogStream = fs.createWriteStream(
  getProjectPath('logs', 'access.log'),
  { flags: 'a' }
);

app.use(express.json());
app.use(morgan('dev'));
app.use(morgan('combined', { stream: accessLogStream }));
app.use(logger);

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export { app }