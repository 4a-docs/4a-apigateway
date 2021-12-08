const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const AdminDoctorAPI = require("./dataSources/admin_doctor_api");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        adminDoctorAPI: new AdminDoctorAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});