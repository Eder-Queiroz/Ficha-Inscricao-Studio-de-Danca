const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('BancoStudioDanca', 'root', '', {

    host: 'localhost',
    dialect: 'mysql'

});

sequelize.authenticate().then(() => {

    console.log("Conexão com o banco de dados realizada com sucesso!");

}).catch((error: any) => {

    console.error("Falha ao se conectar ao banco de dados:", error);

});

module.exports = sequelize;