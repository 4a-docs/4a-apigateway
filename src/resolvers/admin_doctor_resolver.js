const adminDoctorResolver = {
    Query: {
        doctorById: async(_, { id }, { dataSources }) => {
            console.log(dataSources);
            return await dataSources.adminDoctorAPI.doctorById(id);
        }
    },
    // Mutation: {}
}

module.exports = adminDoctorResolver;