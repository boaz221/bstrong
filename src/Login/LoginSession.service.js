let that;

export default class LoginSession {
    constructor (){
        if(that){
            return that;
        }

        this.loggedToken = null;

        that = this;
    }

    setToken(token){
        this.loggedToken = token;
    }

    isUserLogged(){
        return !!this.loggedToken
    }
}