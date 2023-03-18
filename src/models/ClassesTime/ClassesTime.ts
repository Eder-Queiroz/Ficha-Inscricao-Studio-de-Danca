import { DataTypes } from "sequelize";

const con = require('../../database/connectDatabase');

const ClassesTime = con.define('classestime', {

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
    }

});

ClassesTime.sync();

module.exports = ClassesTime;