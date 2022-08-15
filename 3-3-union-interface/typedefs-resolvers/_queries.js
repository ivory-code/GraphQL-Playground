const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        equipments: [Equipment]
        equipmentAdvs: [EquipmentAdv]
        softwares: [Software]
        software: Software
        supplies: [Supply]
    }
`

module.exports = typeDefs