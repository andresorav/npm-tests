const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server tests', () => {
    describe('Hello world tests', () => {
        it('should return hello world in response', (done) => {
            request(app)
                .get('/')
                .expect('Hello world!')
                .end(done);
        });

        it('should return hello world in response', (done) => {
            request(app)
                .get('/404')
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    })
                })
                .end(done);
        });
    });

    describe('404 tests', () => {
        it('should return error 404', (done) => {
            request(app)
                .get('/404')
                .expect(404)
                .expect({
                    error: 'Page not found.'
                })
                .end(done);
        });

        it('should include defined user in users response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Andres',
                        address: 'Tallinn'
                    })
                })
                .end(done);
        });
    });
});
