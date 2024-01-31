const { DataTypes } = require("sequelize");
const sequelize = require('../database/postgres');

const Producto = sequelize.define('productos', {
    id_productos: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.NUMBER
    },
    laboratorio: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fecha_vence: {
        type: DataTypes.DATE
    },
    lote: {
        type: DataTypes.NUMBER
    },
    presentacion: {
        type: DataTypes.STRING
    },
    stock_minimo: {
        type: DataTypes.NUMBER
    },
    stock: {
        type: DataTypes.NUMBER
    },
    id_sucursal: {
        type: DataTypes.STRING
    }
})

module.exports = Producto;