const usersModel = require('../login/users.model');

module.exports = {
    get,
    set
};

function get(username) {
    return usersModel.findOne({username}).lean().exec();
}

function set(username, changeSet) {
    return usersModel.findOneAndUpdate({username}, changeSet, {new: true}).lean().exec();
}