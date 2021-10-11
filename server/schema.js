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

input ChosenStudent {
    first_name: String
    last_name: String
    gender: String
    house: String
}

input ChosenProfessor {
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
    ProfessorByNameOrID(input: String!): Professor
}

type Mutation {
    addStudent(input: ChosenStudent): String!
    addProfessor(input: ChosenProfessor): String!
    
    editStudent(NameorID: String!, changes: ChosenStudent): String!
    editProfessor(NameorID: String!, changes: ChosenProfessor): String!

    deleteStudent(NameorID: String!): String!
    deleteProfessor(NameorID: String!): String!
}
`
module.exports = typeDefs;