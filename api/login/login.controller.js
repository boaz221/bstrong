const loginTokenService = require('./login-token.service');

module.exports = {
    login
};

function login(username, password) {
    if(username === "bla"){
        return {ok: true, token: loginTokenService.encryptNewToken(username)};
    }
    return {ok: false};
}