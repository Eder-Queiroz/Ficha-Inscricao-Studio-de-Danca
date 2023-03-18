import { DataTypes, INTEGER } from "sequelize";

const con = require('../../database/connectDatabase');

const Client = con.define('client', {

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
        type: DataTypes.BIGINT,
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
    telefone: {
        type: DataTypes.BIGINT,
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
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    data_matricula: {
        type: DataTypes.DATE,
        allowNull: false
    },
    payment_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    classes_time_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }

});

Client.sync();

module.exports = Client;