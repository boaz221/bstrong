const jwt = require('jsonwebtoken');

module.exports = {
    validateToken,
    encryptNewToken
};

function validateToken(token) {
    try{
        return !!jwt.verify(token, 'secret');
    }
    catch (err){
        return false;
    }
}

function encryptNewToken(username) {
    return jwt.sign({username}, 'secret');
}