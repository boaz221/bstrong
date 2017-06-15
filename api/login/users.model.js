const mongoose = require('mongoose');

const User = mongoose.model('User', mongoose.Schema({
    username: String,
    password: String
}), 'users');

module.exports = User;