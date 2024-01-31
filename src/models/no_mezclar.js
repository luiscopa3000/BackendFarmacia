const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const No_mezclar = sequelize.define('no_mezclar', {
    id_nomez: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_productos: {
        type: DataTypes.STRING
    },
    id_nomezclar: {
        type: DataTypes.STRING
    },
    desc_nom: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'no_mezclar'
})

module.exports = No_mezclar;