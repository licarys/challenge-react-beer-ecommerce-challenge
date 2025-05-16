import request from 'supertest';
import { app } from '../app.js';

describe('API', () => {
  it('GET /api should return 200', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(200);
  });
});