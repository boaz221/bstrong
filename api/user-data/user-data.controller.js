const _ = require('lodash');

const userDataStore = require('./user-data.store');

module.exports = {
    get,
    setComment
};

async function get(username) {
    const user = await userDataStore.get(username);
    if(!user){
        throw("User Don't Exist!")
    }

    return omitPrivateData(user);
}

async function setComment(username, comment) {
    return omitPrivateData(await userDataStore.set(username, {comment}));
}

function omitPrivateData(user) {
    return _.omit(user, ["_id", "username", "password"]);
}