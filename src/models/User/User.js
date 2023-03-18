import { DataTypes } from "sequelize";

import sequelize from "../../database/connectDatabase.js";

const User = sequelize.define('users', {

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
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    deleted_dateTime: {
        type: DataTypes.DATE,
    }

})

User.sync();

export default User;