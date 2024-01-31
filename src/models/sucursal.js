// models/sucursal.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Sucursal = sequelize.define('sucursales', {
    id_sucursal: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre_sucursal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    encargado_sucursal: {
        type: DataTypes.STRING,
    },
    direccion_sucursal: {
        type: DataTypes.STRING,
    },
    telefono_sucursal: {
        type: DataTypes.STRING,
    },
});
module.exports = Sucursal;
