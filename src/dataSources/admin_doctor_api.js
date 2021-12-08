const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AdminDoctorAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.admin_doctor_url;
    }

    async doctorById(id){
        return await this.get(`/api/doctors/${id}`);
    }
}

module.exports = AdminDoctorAPI;