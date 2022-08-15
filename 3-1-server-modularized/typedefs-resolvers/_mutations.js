const { gql } = require('apollo-server')

const typeDefs = gql`
    type Mutation {
      deleteEquipment(id: String): Equipment
    }
`

module.exports = typeDefs