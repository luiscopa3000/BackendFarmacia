const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Empleado = sequelize.define('empleados', {
    ci: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ci_garante: {
        type: DataTypes.STRING
    },
    usert: {
        type: DataTypes.STRING
    },
    passwordt: {
        type: DataTypes.STRING
    },
    correo_electronico: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    }
});

module.exports = Empleado;