import { DataTypes } from "sequelize";

const con = require('../../database/connectDatabase');

const User = con.define('user', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

User.sync();

module.exports = User;