const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Carrito = sequelize.define('carritos', {
    id_carrito: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    fecha_venta: {
        type: DataTypes.DATE
    },
    califica_atencion: {
        type: DataTypes.STRING
    },
    motivo: {
        type: DataTypes.STRING
    },
    ci: {
        type: DataTypes.STRING
    },
    ci_cliente: {
        type: DataTypes.STRING
    }
})

module.exports = Carrito;