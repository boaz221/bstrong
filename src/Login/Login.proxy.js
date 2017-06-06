export default class loginProxy {
    static async login(username, password) {
        const loginResponse = await fetch("/login", {
            method: 'POST',
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify({username, password})
        });

        if(loginResponse.ok){
            return await loginResponse.json();
        }else{
            throw await loginResponse.json();
        }
    }
}