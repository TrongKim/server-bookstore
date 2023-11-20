const { Sequelize, sequelize } = require('./index');

const New = sequelize.define('New', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    
});

module.exports = Product;
