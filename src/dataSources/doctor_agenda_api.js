const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class ScheduleAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL= serverConfig.agenda_api_url;
    }

    async obtenerAgendasDoctor(doctor){
       return await this.get(`/agendas-doctor/${doctor}`);
    }
    async obtenerAgenda(id){
        return await this.get(`/agenda/${id}`);
    }
    async crearAgenda(dataAgenda){
        return await this.post('/agenda', dataAgenda);
    }
    async crearAgendas(dataAgendas){
        return await this.post('/agendas', dataAgendas);
    }
    // async crearAgendaRegistro(agenda){
    //     return await this.post('/agenda',agenda);
    // }

}

module.exports = ScheduleAPI;