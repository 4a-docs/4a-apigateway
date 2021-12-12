const adminDoctorTypeDefs = require("./admin_doctor_typedef");
const authTypeDefs = require("./auth_typedef");
const doctorAgendaTypeDefs = require("./doctor_agenda_typedef");

const schemasArrays = [adminDoctorTypeDefs, authTypeDefs, doctorAgendaTypeDefs];

module.exports = schemasArrays;