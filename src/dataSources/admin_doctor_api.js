const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AdminDoctor extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.admin_doctor_api;
    }

    async doctorById(id){
        return await this.get(`/api/doctors/${id}`);
    }
}

module.exports = AdminDoctor;