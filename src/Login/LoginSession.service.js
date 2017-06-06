let that;

export default class LoginSession {
    constructor (){
        if(that){
            return that;
        }

        this.loggedSession = null;

        that = this;
    }

    setUser(user){
        this.loggedSession = user;
    }

    isUserLogged(){
        return !!this.loggedSession
    }
}