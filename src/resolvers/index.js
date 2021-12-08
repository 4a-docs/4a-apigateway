const adminDoctorResolver = require("./admin_doctor_resolver");

const lodash = require("lodash");

const resolvers = lodash.merge(adminDoctorResolver);

module.exports = resolvers;