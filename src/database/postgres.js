const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bsthwsfbpulvq1wpc0gv', 'uduwnvnfzz5zxjwlgjgi', '50013', {
    host: 'bsthwsfbpulvq1wpc0gv-postgresql.services.clever-cloud.com',
    dialect: 'postgres',
    define: {
        timestamps: false, // Esto evita que Sequelize agregue 'created_at' y 'updated_at' automáticamente
    },
    logging: false,
});

module.exports = sequelize;
