import { DataTypes } from "sequelize";

import sequelize from "../../database/connectDatabase.js";

const Payment = sequelize.define('payment', {

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
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    deleted_dateTime: {
        type: DataTypes.DATE,
    }

});

Payment.sync();

export default Payment;