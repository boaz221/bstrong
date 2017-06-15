const usersModel = require('./users.model');

module.exports = {
    login
};

async function login(username, password) {
    const existsUser = await usersModel.findOne({username, password}).lean().exec();

    return !!existsUser;
}