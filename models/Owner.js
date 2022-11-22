const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Owner extends Model {}


Owner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },

    {
        sequelize,
        bcrypt,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Owner',
      }
);

module.exports = Owner;