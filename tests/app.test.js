const request = require('supertest');
const app = require('../src/app.js');

describe('GET /', () => {
    it('responde con "¡Hola, mundo!"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('¡Hola, mundo!');
        expect(response.status).toBe(200);
    });
});
