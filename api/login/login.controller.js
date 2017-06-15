const loginStore = require('./login.store');
const loginTokenService = require('./login-token.service');

module.exports = {
    login
};

async function login(username, password) {
    const loggedIn = await loginStore.login(username, password);
    return loggedIn ? {ok: true, token: loginTokenService.encryptNewToken(username)} : {ok: false};
}