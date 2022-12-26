const sequelize = require('../config/connection');
const { user, blogpost } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await user.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const blogpost of blogpostData) {
        await blogpost.create({
            ...blogpost,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();