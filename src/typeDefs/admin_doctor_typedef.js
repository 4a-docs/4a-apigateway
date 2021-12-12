const { gql } = require("apollo-server");

const adminDoctorTypeDefs = gql`
    type AdminDoctor {
        id: Int
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
        id: Int
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
        doctors(id: Int): [AdminDoctor]
    }

    type Mutation {
        doctorCreate(doctorInformation: DoctorCreateInput): AdminDoctor
    }

`;

module.exports = adminDoctorTypeDefs;