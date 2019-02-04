const express      = require('express');
const app          = express();

const request      = require('supertest');
// const app = require('../../src/app')



describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/status').then((response) => {
          console.log(response.statusCode)
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
