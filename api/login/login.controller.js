module.exports = {
    login
};

function login(username, password) {
    if(username === "bla"){
        return {ok: true};
    }
    return {ok: false};
}