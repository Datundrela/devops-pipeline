const request = require('supertest');
const { app, server } = require('./index');

afterAll(() => {
  server.close(); // Close the server after tests
});

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(404);
  });
});