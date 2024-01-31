const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Proveedor = sequelize.define('proveedores', {
    id_proveedor: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nom_prov: {
        type: DataTypes.STRING
    },
    contact_prov: {
        type: DataTypes.STRING
    },
    email_prov: {
        type: DataTypes.STRING
    },
    tel_prov: {
        type: DataTypes.STRING
    },
    direccion_prov: {
        type: DataTypes.STRING
    },
    obs_prov: {
        type: DataTypes.STRING
    }
})

module.exports = Proveedor;