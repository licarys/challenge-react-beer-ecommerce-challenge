import cors from 'cors';
import express from 'express';
import fs from 'fs';
import routes from './routers/index.router.js';
import logger from './middlewares/logger.js';
import morgan from 'morgan';
import { config } from './config.js';
import { errorHandler, notFound } from './middlewares/error-handler.js';
import { getProjectPath } from './utils/paths.js';

const app = express();

const accessLogStream = fs.createWriteStream(
  getProjectPath('logs', 'access.log'),
  { flags: 'a' }
);

const corsOptions = {
  origin: config.allowedClientUrl,
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(morgan('combined', { stream: accessLogStream }));
app.use(logger);

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export { app }