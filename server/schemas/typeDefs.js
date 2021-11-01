const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: string!
    Email: string!
    password: String!
    Savedbooks: [Book]
}

type Book {
    boodid: string!
    authors: string!
    description: string
    image: string
    link: string
}

type AUTH {
    user: User
    toked: ID!
}