const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the user model
class User extends Model { }

// define user table with 4 columns
User.init(
    {
        // define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        // define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least 4 characters
                len: [4]
            }
        }
    },
    {
        // table config options
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;