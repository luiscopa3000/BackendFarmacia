const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Cliente = sequelize.define('clientes', {
    ci: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    puntos_fidelidad: {
        type: DataTypes.NUMBER
    },
    observaciones: {
        type: DataTypes.STRING
    }
})

module.exports = Cliente;