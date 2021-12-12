const adminDoctorResolver = require("./admin_doctor_resolver");
const authResolver = require("./auth_resolver");
const scheduleResolver = require("./doctor_agenda_resolver");
const lodash = require("lodash");

const resolvers = lodash.merge(adminDoctorResolver, authResolver, scheduleResolver);

module.exports = resolvers;