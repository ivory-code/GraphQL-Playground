const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        equipments: [Equipment]
    }
`

module.exports = typeDefs