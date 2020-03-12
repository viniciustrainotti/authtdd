const bcrypt = require('bcryptjs');

const { User } = require('../../src/app/models');
const truncate = require ('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt user password', async () => {
        const user = await User.create({ name: 'Vinicius', email: 'teste@gmail.com', password: '123456'});

        // const hash = await bcrypt.hash("123456", 8);

        // expect(user.password_hash).toBe(hash);

        const compareHash = await bcrypt.compare('123456', user.password_hash);
        expect(compareHash).toBe(true); 
    });
});