var request = require('supertest');
var app = require('../src');
describe(`GET /`, function() {
    it(`respond with hello world`, function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect("Hello, There 1", done);
    });
});