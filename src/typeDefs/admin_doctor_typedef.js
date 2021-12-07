const {gql} = require("apollo-server");

const adminDoctorTypeDef = gql`
    type AdminDoctor {
        id: String!
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
        doctorByName(name: String!): AdminDoctor
    }
`;

module.exports = adminDoctorTypeDef; 