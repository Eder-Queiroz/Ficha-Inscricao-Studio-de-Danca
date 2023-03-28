import { DataTypes, INTEGER } from "sequelize";

import sequelize from "../../database/connectDatabase.js";

const Client = sequelize.define('client', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rua: {
        type: DataTypes.STRING,
        allowNUll: false
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNUll: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone1: {
        type: DataTypes.STRING,
    },
    telefone2: {
        type: DataTypes.STRING,
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    professora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_matricula: {
        type: DataTypes.DATE,
        allowNull: false
    },
    responsavel: {
        type: DataTypes.STRING
    },
    classes_time_id: {
        type: DataTypes.BIGINT,
        // allowNull: false
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        // allowNull: false
    },
    deleted_dateTime: {
        type: DataTypes.DATE
    }

});

Client.sync();

export default Client;