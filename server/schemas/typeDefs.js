const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    Email: String!
    password: String!
    savedBooks: [Book]
}

type Book {
    boodId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
}

type AUTH {
    user: User
    toked: ID!
}

type Query {
    me: User
}

type mutation {
    login(email: String!, password: String!): Auth
    newUser(username: String!, email: Sgring! password: Sttring!): Auth
    storeBook(bookID: String!, title: String! authors: String! description: String! image: String! link: String!)
    deleteBook(bookId: String!)
}

