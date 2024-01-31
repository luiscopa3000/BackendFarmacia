const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Contraindicacion = sequelize.define('Contraindicaciones', {
    id_contraind: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_productos: {
        type: DataTypes.STRING
    },
    tipo: {
        type: DataTypes.STRING
    },
    desc_contraindica: {
        type: DataTypes.STRING
    }
})
module.exports = Contraindicacion;