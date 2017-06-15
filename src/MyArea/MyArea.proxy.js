import LoginSesssionService from "../Login/LoginSession.service";

const SessionService = new LoginSesssionService();

export default class MyAreaProxy {
    static async get() {
        const response = await fetch("/api/user-data", {headers: {authorization: SessionService.loggedToken}});
        const parsedResponse = await response.json();
        if (!response.ok) {
            throw parsedResponse;
        }
        return parsedResponse;
    }

    static async setComment(comment) {
        const response = await fetch("/api/user-data/set-comment", {
            method: "POST",
            headers: {authorization: SessionService.loggedToken, 'Content-Type': 'application/json'},
            body: JSON.stringify({comment})
        });
        const parsedResponse = await response.json();
        if (!response.ok) {
            throw parsedResponse;
        }
        return parsedResponse;
    }
}