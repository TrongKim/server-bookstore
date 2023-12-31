const { Sequelize, sequelize } = require('./index');

const New = sequelize.define('New', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = New;
