import LoginSesssionService from "../Login/LoginSession.service";

const SessionService = new LoginSesssionService();

export default class ArticlesProvider {
    static async get() {
        const response = await fetch("/api/articles", {headers: {authorization: SessionService.loggedToken}});
        const parsedResponse = await response.json();
        if (!response.ok) {
            throw parsedResponse;
        }
        return parsedResponse;
    }
}