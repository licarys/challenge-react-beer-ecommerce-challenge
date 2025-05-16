import { app } from './app.js';
import http from 'http';
import { config } from './config.js';

const server = http.createServer(app);
app.locals.apiBaseUrl = config.apiBaseUrl;

server.listen(config.port, () => {
  console.info(`HTTP server running on port ${config.port}`);
});
