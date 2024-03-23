const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bsthwsfbpulvq1wpc0gv', 'uduwnvnfzz5zxjwlgjgi', 'dHVuwjNGXJKV8bUQHodH', {
    host: 'bsthwsfbpulvq1wpc0gv-postgresql.services.clever-cloud.com',
    port: '50013',
    dialect: 'postgres',
    define: {
        timestamps: false, // Esto evita que Sequelize agregue 'created_at' y 'updated_at' automáticamente
    },
    logging: false,
});
//Correccion de errores
module.exports = sequelize;
