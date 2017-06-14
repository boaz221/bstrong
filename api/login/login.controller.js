module.exports = {
    login
};

function login(username, password) {
    if(username === "bla"){
        return {ok: true, token: "Adcadcadvfb31413413"};
    }
    return {ok: false};
}