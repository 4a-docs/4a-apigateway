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
        role: String!
    }

    input DoctorCreateInput {
        id: String
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
        doctorById(id: String!): AdminDoctor
        doctors(id: String): [AdminDoctor]
    }

    type Mutation {
        doctorCreate(doctorInformation: DoctorCreateInput): AdminDoctor
    }

`;

module.exports = adminDoctorTypeDefs;