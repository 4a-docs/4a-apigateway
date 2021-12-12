const adminDoctorResolver = {
    Query: {
        doctorById: async(_, { id }, { dataSources, userIdToken }) => {
            // console.log(dataSources);
            if ( userIdToken.role == 'admin' ) {
                return await dataSources.adminDoctorAPI.doctorById(id);                
            } else {
                return null;
            }
        },

        doctors: async(_, { id }, { dataSources, userIdToken }) => {
            console.log(userIdToken);
            if ( userIdToken.role == 'admin' ) {
                return await dataSources.adminDoctorAPI.doctors(id);                
            } else {
                return null;
            }
        }
    },

    Mutation: {
        doctorCreate: async(_, { doctorInformation }, { dataSources, userIdToken }) => {
            if ( userIdToken.role == 'admin' ) {
                return await dataSources.adminDoctorAPI.doctorCreate(doctorInformation);                
            } else {
                return null;
            }
        }
    }
}

module.exports = adminDoctorResolver;