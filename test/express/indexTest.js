var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;

var request = require('supertest');
var app = require('../../app.js');



describe('Check routes', function() {
    it('Test the start route', function(done) {
        request(app).get("/")
            .expect(200, done);
    });
    it('Test the about route', function(done) {
        request(app).get("/about")
            .expect(200, done);
    });
    it('Test the report route', function(done) {
        request(app).get("/report")
            .expect(200, done);
    });
    it('Test the app route', function(done) {
        request(app).get("/application")
            .expect(200, done);
    });
    it('Test the chat route', function(done) {
        request(app).get("/chat")
            .expect(200, done);
    });
});
