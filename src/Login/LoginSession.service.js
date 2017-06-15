let that;

export default class LoginSession {
    constructor (){
        if(that){
            return that;
        }

        this.loggedToken = getTokenFromLocalStorageOrNull();

        that = this;
    }

    setToken(token){
        this.loggedToken = token;
        return localStorage.setItem("loggedUserKey", token);
    }

    removeLoggedUser(){
        this.setToken(null);
    }

    isUserLogged(){
        return !!this.loggedToken
    }
}

function getTokenFromLocalStorageOrNull() {
    return localStorage.getItem("loggedUserKey");
}