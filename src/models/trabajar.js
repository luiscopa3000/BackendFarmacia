const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Trabajar = sequelize.define('trabajar', {
    id_sucursal: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ci: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    fecha_inicio_contrato: {
        type: DataTypes.DATE
    },
    fecha_fin_contrato: {
        type: DataTypes.DATE
    },
    cargo: {
        type: DataTypes.STRING
    },
    salario: {
        type: DataTypes.NUMBER
    },
    hora_ingreso: {
        type: DataTypes.TIME
    },
    hora_salida: {
        type: DataTypes.TIME
    },
    hora_ingreso2: {
        type: DataTypes.TIME
    },
    hora_salida2: {
        type: DataTypes.TIME
    },
    observaciones_trabajo: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'trabajar'
});

module.exports = Trabajar;