import { DataTypes } from "sequelize";

const con = require('../../database/connectDatabase');

const Payment = con.define('payment', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.BIGINT
    },
    data_pagamento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    client_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }

});

Payment.sync();

module.exports = Payment;