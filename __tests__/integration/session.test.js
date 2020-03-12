const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');
const factory = require('../factories');

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should authenticate with valid credentials', async () => {
        const user = await factory.create('User', {
            password: "123123"
        });

        // console.log(user);

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123123"
            });

        expect(response.status).toBe(200);

    });

    it('should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User', {
            password: "123123"
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123145"
            });

        expect(response.status).toBe(401);
    });

    it('should return jwt token when authenticated', async () => {
        const user = await factory.create('User', {
            password: "123123"
        });

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: "123123"
            });

        expect(response.body).toHaveProperty("token");     
    });

    it('should be atle to acess private routes when authenticated', async () => {
        const user = await factory.create('User', {
            password: "123123"
        });

        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer ${user.generateToken()}`);

        expect(response.status).toBe(200); 
    });

    it('should not be atle to acess private routes without jwt token', async () => {
        const response = await request(app)
            .get('/dashboard');

        expect(response.status).toBe(401); 
    });

    it('should not be atle to acess private routes with invalid jwt token', async () => {
        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', `Bearer 123123`);

        expect(response.status).toBe(401); 
    });
});
