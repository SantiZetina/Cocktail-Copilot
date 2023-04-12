const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
        favorites: [Instruction]
    }

    type Instruction {
        id: ID!
        name: String!
        ingredients: [Ingredient]
        steps: [String]!
        notes: String
        imageUrl: String
    }

    type Ingredient {
        name: String!
        amount: String!
    }

    type Query {
        getAllUsers: [User]
        getUserById(id: ID!): User
        getAllInstructions: [Instruction]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User
        updateUser(id: ID!, username: String!, email: String!, password: String!): User
        deleteUser(id: ID!): User
        login(username: String!, password: String!): User
        logout: Boolean
    }
`;

module.exports = typeDefs;