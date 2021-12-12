const { RESTDataSource } = require("apollo-datasource-rest");
const fetch = require("node-fetch");
const serverConfig = require("../server");

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_url;
    }

    async userById(id){
        return await this.get(`/api/user/${id}`);
    }

    async registerUser(userInformation){
        return await this.post(`/api/register`, userInformation);
    }

    async logIn(credentials){
        return await this.post(`/api/login`, credentials);
    }

}

module.exports = AuthAPI;