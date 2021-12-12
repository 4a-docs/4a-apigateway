const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const AdminDoctorAPI = require("./dataSources/admin_doctor_api");
const AuthAPI = require("./dataSources/auth_api");
const ScheduleAPI = require("./dataSources/doctor_agenda_api");
const authentication = require("./utils/authentication")

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        adminDoctorAPI: new AdminDoctorAPI(),
        authAPI: new AuthAPI(),
        scheduleAPI: new ScheduleAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});