import request from 'supertest';
import { app } from '../app.js';

describe('GET /api/products', () => {
  it('should return a list of products with status 200', async () => {
    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    const product = response.body[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('brand');
    expect(product).toHaveProperty('image');
    expect(product).toHaveProperty('style');
    expect(product).toHaveProperty('substyle');
    expect(product).toHaveProperty('abv');
    expect(product).toHaveProperty('origin');
    expect(product).toHaveProperty('information');
    expect(product).toHaveProperty('skus');
    expect(Array.isArray(product.skus)).toBe(true);
  });

  it('should return an item if the id is valid', async () => {
    const response = await request(app).get('/api/products/127');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('brand');
    expect(response.body).toHaveProperty('image');
    expect(response.body).toHaveProperty('style');
    expect(response.body).toHaveProperty('substyle');
    expect(response.body).toHaveProperty('abv');
    expect(response.body).toHaveProperty('origin');
    expect(response.body).toHaveProperty('information');
    expect(response.body).toHaveProperty('skus');
    expect(Array.isArray(response.body.skus)).toBe(true);
  });

  it('should return 404 if the id is invalid', async () => {
    const response = await request(app).get('/api/products/000');

    expect(response.status).toBe(404);
  });
});