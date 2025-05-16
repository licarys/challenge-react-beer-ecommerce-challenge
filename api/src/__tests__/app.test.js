import request from 'supertest';
import { app } from '../app.js';

describe('API', () => {
  it('GET /api should return 200', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
  });
});