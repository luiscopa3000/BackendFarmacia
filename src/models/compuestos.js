const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Compuestos = sequelize.define('compuestos', {
    id_compuesto: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_producto: {
        type: DataTypes.STRING
    },
    nom_compuesto: {
        type: DataTypes.STRING
    }
})

module.exports = Compuestos;