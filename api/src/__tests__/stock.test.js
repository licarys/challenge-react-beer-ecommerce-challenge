import request from 'supertest';
import { app } from '../app.js';

describe('GET /api/stock-price/:sku', () => {
	it('should return 404 if the SKU is not found', async () => {
		const response = await request(app).get('/api/stock-price/12345');

		expect(response.status).toBe(404);
		expect(response.body).toHaveProperty('message');
		expect(response.body.message).toBe('SKU 12345 not found.');
	});

	it('should return the stock price of a product with status 200', async () => {
		const response = await request(app).get('/api/stock-price/10167');

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('price');
		expect(response.body).toHaveProperty('stock');
	});
});