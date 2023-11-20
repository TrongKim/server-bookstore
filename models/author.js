const { Sequelize, sequelize } = require('./index');

const Author = sequelize.define('Author', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publication_date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    share_us_on: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    story: {
        type: Sequelize.STRING,
        allowNull: false
    },
    awards: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;
