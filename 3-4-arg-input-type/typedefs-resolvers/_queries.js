const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        people: [People],
        equipments: [Equipment]
        equipmentAdvs: [EquipmentAdv]
        softwares: [Software]
        software: Software
        supplies: [Supply]
        givens: [Given]
    }
`

module.exports = typeDefs