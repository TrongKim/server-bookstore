const { Sequelize, sequelize } = require('./index');

const Rate = sequelize.define('Rate', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    rate: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id_product: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Rate;
