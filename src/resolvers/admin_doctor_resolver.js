const adminDoctorResolver = {
    Query: {
        doctorById: async(_, { id }, { dataSources }) => {
            // console.log(dataSources);
            return await dataSources.adminDoctorAPI.doctorById(id);
        },

        doctors: async(_, { id }, { dataSources }) => {
            return await dataSources.adminDoctorAPI.doctors(id);
        }
    },

    Mutation: {
        doctorCreate: async(_, { doctorInformation }, { dataSources }) => {
            return await dataSources.adminDoctorAPI.doctorCreate(doctorInformation);
        }
    }
}

module.exports = adminDoctorResolver;