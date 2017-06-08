var should    = require('chai').should();
var supertest = require('supertest');
var api       = supertest('http://localhost:3000/api');

describe('project unit tests:', () => {
    it('Should create a project instance', (done: Function) => {
        api.post('/projects').send({
            name: 'test',
            description: 'test'
        }).expect(200, done);
    });
});
