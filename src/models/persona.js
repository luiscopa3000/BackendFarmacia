const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../database/postgres');

const Persona = sequelize.define('personas', {
    ci: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    genero: {
        type: DataTypes.NUMBER
    },
    telefono: {
        type: DataTypes.NUMBER
    },
    direccion_domicilio: {
        type: DataTypes.STRING
    }
})

module.exports = Persona;