const scheduleResolver = {
    Query: {
        obtenerAgendasDoctor: async (_, { doctor }, { dataSources, userIdToken } ) => {
            if ( userIdToken.role == 'admin' ) {
                return await dataSources.scheduleAPI.obtenerAgendasDoctor(doctor);                
            } else {
                return null;
            }
        },
        obtenerAgenda: async(_, { id }, { dataSources, userIdToken } ) => {
            if ( userIdToken.role == 'admin' ) {
                return await dataSources.scheduleAPI.obtenerAgenda(id)                
            } else {
                return null;
            }
        }        
    }, 

    Mutation: {
        crearAgenda: async(_, { dataAgenda }, { dataSources, userIdToken } ) => {
            if ( userIdToken.role == 'admin' || userIdToken.role == 'doctor' ) {
                return await dataSources.scheduleAPI.crearAgenda(dataAgenda);                
            } else {
                return null;
            }
        },
        crearAgendas: async(_, { dataAgendas }, { dataSources, userIdToken } ) => {
            if ( userIdToken.role == 'admin' || userIdToken.role == 'doctor' ) {
                return await dataSources.scheduleAPI.crearAgendas(dataAgendas);
            } else {
                return null;
            }
        }
    }

}

module.exports = scheduleResolver;