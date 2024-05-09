const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                validatePassword: function (value) {
                    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
                        return "Password must be 8+ long, 1 uppercase, 1 lowercase, 1 digit, 1 symbol"
                    }
                    return true;
                }
            },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;
