'use strict';
const options = require('./options');

module.exports = (sequelize, DataTypes) => {
    const entUser = sequelize.define('EntUser', {
        identityNumber: {
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, options('EntUser'));

    return entUser;
}