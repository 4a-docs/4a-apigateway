const { gql } = require("apollo-server");

const authTypeDefs = gql `
    type User {
        id: Int
        name: String!
        last_name: String!
        phone: String!
        eps: String!
        identification: String!
        birthdate: String!
        email: String!
        role: String!
        token: String!
    }

    input RegisterUserInput {
        id: Int
        name: String!
        last_name: String!
        phone: String!
        eps: String!
        identification: String!
        birthdate: String!
        email: String!
        password: String!
        password_confirmation: String!
    }

    input LoginInput {
        email: String!
        password: String!
    }

    type Token {
        token: String!
    }

    extend type Query {
        userById(id: Int!): User
    }

    extend type Mutation {
        registerUser(userInformation: RegisterUserInput): User!
        logIn(credentials: LoginInput): Token!
    }
`;

module.exports = authTypeDefs;