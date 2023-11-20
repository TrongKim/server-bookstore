const { Sequelize, sequelize } = require('./index');

const Product = sequelize.define('Product', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    genres: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    length: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    images: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publisher: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isbn_10: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dimensions: {
        type: Sequelize.STRING,
        allowNull: true
    },
    who_like: {
        type: Sequelize.STRING,
        allowNull: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: true
    },
    about_author: {
        type: Sequelize.STRING,
        allowNull: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    author_id: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Product;
