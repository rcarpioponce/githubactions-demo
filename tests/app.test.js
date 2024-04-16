// index.test.js

const request = require('supertest');
const { app, cerrarServidor } = require('../src/app'); // Importa tu aplicación Express

describe('Pruebas para la ruta raíz', () => {
    it('Debería devolver "¡Hola, mundo!"', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.text).toBe('¡Hola, mundo!');
    });
  
    // Cierra el servidor después de todas las pruebas
    afterAll(() => {
      cerrarServidor();
    });
});