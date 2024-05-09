const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false
        },
        has_been_editted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        date_last_editted: {
            type: DataTypes.DATE
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
