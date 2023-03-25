import { DataTypes } from "sequelize";

import sequelize from "../../database/connectDatabase.js";

const ClassesTime = sequelize.define('classestime', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    horario_inicial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horario_final: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    client_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    deleted_dateTime: {
        type: DataTypes.DATE,
    }

});

ClassesTime.sync();

export default ClassesTime;