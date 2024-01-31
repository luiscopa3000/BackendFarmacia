const { DataTypes } = require('sequelize');
const sequelize = require('../database/postgres');

const Proveer = sequelize.define('proveer', {
    id_proveedor: {
        type: DataTypes.STRING
    },
    id_provee: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    fecha_prov: {
        type: DataTypes.DATE
    },
    cantidad_prov: {
        type: DataTypes.INTEGER
    },
    obs_prover: {
        type: DataTypes.STRING
    },
    costo_prov: {
        type: DataTypes.NUMBER
    },
    nom_enc: {
        type: DataTypes.STRING
    },
    id_productos: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'proveer'
})

module.exports = Proveer;