import { DataTypes } from "sequelize";

import sequelize from "../../database/connectDatabase.js";

const User = sequelize.define('user', {

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

export default User;