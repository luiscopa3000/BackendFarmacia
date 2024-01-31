const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Grupo_meds = sequelize.define('grupo_meds', {
    id_grupmed: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_productos: {
        type: DataTypes.STRING
    },
    nom_grupo: {
        type: DataTypes.STRING
    }

})

module.exports = Grupo_meds;