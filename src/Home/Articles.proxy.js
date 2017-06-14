import LoginSesssionService from "../Login/LoginSession.service";

const SessionService = new LoginSesssionService();

export default class ArticlesProvider{
    static async get(){
        return (await fetch("/api/articles", {headers: {authorization: SessionService.loggedToken}})).json();
    }
}