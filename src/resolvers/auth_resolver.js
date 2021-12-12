const authResolver = {
    Query: {
        userById: async(_, { id }, { dataSources, userIdToken }) => {
            console.log(['id', id, userIdToken.id]);
            if ( id == userIdToken.id ) {
                return await dataSources.authAPI.userById(id);                
            } else {
                return null;
            }
        },
    },

    Mutation: {
        registerUser: async(_, { userInformation }, { dataSources }) => {
            return await dataSources.authAPI.registerUser(userInformation);
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.logIn(credentials);
        }
    }
}

module.exports = authResolver;