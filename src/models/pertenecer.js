const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Pertencer = sequelize.define('pertenecer', {
    id_pertenece: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_producto: {
        type: DataTypes.STRING
    },
    id_carrito: {
        type: DataTypes.STRING
    },
    cantidad: {
        type: DataTypes.STRING
    },
    fecha_adicion: {
        type: DataTypes.DATE
    },
    descuento: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'pertenecer'
});

module.exports = Pertencer;