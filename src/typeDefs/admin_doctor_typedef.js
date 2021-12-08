const { gql } = require("apollo-server");

const adminDoctorTypeDefs = gql`
    type AdminDoctor {
        id: String
        name: String!
        last_name: String!
        phone: String!
        eps: String!
        identification: String!
        birthdate: String!
        email: String!
    }

    type Query {
        doctorById(id: String): AdminDoctor
    }

    # type Mutation {}
`;

module.exports = adminDoctorTypeDefs;