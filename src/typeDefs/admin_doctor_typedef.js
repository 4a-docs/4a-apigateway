const {gql} = require("apollo-server");

const adminDoctorTypeDef = gql`
    type AdminDoctor {
        id: Int!
        name: String!
        last_name: String!
        phone: String!
        eps: String!
        identification: String!
        birthdate: String!
        email: String!
        password: String!
    }

    type Query {
        doctorById(id: Int!): AdminDoctor
    }
`;

module.exports = adminDoctorTypeDef; 