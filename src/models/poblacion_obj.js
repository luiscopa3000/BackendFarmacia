const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Poblacion_obj = sequelize.define('poblacion_objs', {
    id_poblacion_objs: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_productos: {
        type: DataTypes.STRING
    },
    edad_maxima: {
        type: DataTypes.NUMBER
    },
    edad_minima: {
        type: DataTypes.NUMBER
    },
    obs_pobl_obj: {
        type: DataTypes.STRING
    }
})

module.exports = Poblacion_obj;