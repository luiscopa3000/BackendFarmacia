const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('farmacia', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false, // Esto evita que Sequelize agregue 'created_at' y 'updated_at' automáticamente
    },
    logging: false,
});

module.exports = sequelize;