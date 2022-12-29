const user = require('./user');
const blogpost = require('./blogpost');

user.hasMany(blogpost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

blogpost.belongsTo(user, {
    foreignKey: 'user_id'
});

module.exports = { user, blogpost };