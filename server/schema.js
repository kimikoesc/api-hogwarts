const { gql } = require("apollo-server");

const typeDefs = gql`

type House {
    id: String
    house_name: String
    founder: String
    animal: String
}

type Student {
    id: String
    first_name: String
    last_name: String
    gender: String
    house: String
}

type Professor {
    id: String
    first_name: String
    last_name: String
    gender: String
}

type Query {
    Houses: [House]
    HouseByNameOrID(input: String!): House
    Students: [Student]
    StudentByNameOrID(input: String!): Student
    StudentsByHouse(input: String!): [Student]
    Professors: [Professor]
    ProfessorsByNameOrID(input: String!): Professor
}
`
module.exports = typeDefs;