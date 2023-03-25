import { Sequelize } from "sequelize";

const sequelize = new Sequelize('studioteste', 'root', '', {

    host: 'localhost',
    dialect: 'mysql'

});

sequelize.authenticate().then(() => {

    console.log("Conexão com o banco de dados realizada com sucesso!");

}).catch((error) => {

    console.error("Falha ao se conectar ao banco de dados:", error);

});

export default sequelize;