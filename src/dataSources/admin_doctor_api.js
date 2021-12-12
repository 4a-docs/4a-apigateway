const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class AdminDoctorAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.admin_doctor_url;
    }

    async doctorCreate(doctorInformation){
        return await this.post('/api/doctors',doctorInformation);
    }

    async doctorById(id){
        return await this.get(`/api/doctors/${id}`);
    }

    async doctors(id){
        return await this.get('/api/doctors');
    }
}

module.exports = AdminDoctorAPI;