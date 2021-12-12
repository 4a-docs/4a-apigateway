const { gql } = require('apollo-server');

const scheduleTypeDef = gql`

    type Appointments{
        id: String
        doctor:String!
        start_hour:String!
        start_date:String!
    }

    input AppointmentsInput{
        doctor: String!
        start_hour: String!
        start_date: String!
    }

    extend type Query{
        obtenerAgenda(id:String):Appointments
        obtenerAgendasDoctor(doctor:String!): [Appointments]
    }

    extend type Mutation{
        crearAgenda(dataAgenda: AppointmentsInput!):Appointments
        crearAgendas(dataAgendas: AppointmentsInput!):[Appointments]
    }

`;

module.exports = scheduleTypeDef;