const request = require('supertest');
const app = require('./app');

describe('Test (GET,POST,PUT,DELETE) HTTPS Methods',()=>{

    test('Expected to return ("GET HTTP Method")', async ()=>{
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });

    test('Expected to return ("POST HTTP Method")', async ()=>{
        const res = await request(app).post('/');
        expect(res.statusCode).toEqual(200);
    });

    test('Expected to return ("PUT HTTP Method")', async ()=>{
        const res = await request(app).put('/');
        expect(res.statusCode).toEqual(200);
    });

    test('Expected to return ("DELETE HTTP Method")', async ()=>{
        const res = await request(app).delete('/');
        expect(res.statusCode).toEqual(200);
    });


})