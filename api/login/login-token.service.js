const jwt = require('jsonwebtoken');

module.exports = {
    decryptToken,
    validateToken,
    encryptNewToken
};

function decryptToken(token) {
    try{
        return jwt.verify(token, 'secret');
    }
    catch (err){
        return null;
    }
}

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