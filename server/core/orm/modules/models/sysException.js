'use strict';
const options = require('./options');

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('SysException', {
        module: {
            type: DataTypes.STRING,
            allowNull: true
        },
        exception: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        stackTrace: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        identityNumber: {
            type: DataTypes.BIGINT(11),
            allowNull: true,
            validate: { len: [11] }
        }    
    }, options('SysException'));

    return model;
}