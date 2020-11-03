const server = require('./server');
const supertest = require('supertest');
const request = supertest(server);

it('should return Hello World', (done) => {
    request
        .get('/')
        .then(response => {
            expect(response.status).toBe(200);
            return response.body;
        })
        .then(data => {
            expect(data).toMatchObject({ text: "Hello World!" });
            done();
        });

});