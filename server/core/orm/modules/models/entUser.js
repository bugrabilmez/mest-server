'use strict';
const options = require('./options');
const base = require('./base');

module.exports = (sequelize, DataTypes) => {

    let columns = {
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
    };

    columns = Object.assign(columns, base(DataTypes)); 

    const entUser = sequelize.define('EntUser', columns, options('EntUser'));

    return entUser;
}