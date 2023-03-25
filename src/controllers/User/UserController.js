import BasicAPIResponse from "../../models/BasicResponse/BasicAPIResponse.js";
import User from "../../models/User/User.js";
import bcrypt from "bcrypt";

export default class UserController {

    static async insert(req, res) {

        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;
        
        let response = await UserController.insertDatabase(req.body);

        let status;

        if(response.error == true) {

            status = 400;
            console.error(`Error ao inserir Usuario! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        }else {

            status = 200;
            console.log(`Usuario inserido com sucesso! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        }

        return res.status(status).json(response);

    }

    static async insertDatabase(body) {

        return new Promise(async resolve => {

            let response;

            await User.create(body).then(() => {

                response = new BasicAPIResponse('Usuario criado com sucesso!', false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao cadastrar usuario: ${error}`, true);
                resolve(response);

            });

        });

    }

    static async update(req, res) {

        let id = req.params.id;

        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;

        let status;

        let response = await UserController.updateDatabase(req.body, id);

        if(response.error == true) {

            status = 400;
            console.error(`Error ao atualizar Usuario! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        } else {

            status = 200;
            console.log(`Usuario atualizado com sucesso! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        }

        return res.status(status).json(response.toJson());

    }

    // todo - atualizar a query do update

    static async updateDatabase(body, id) {

        return new Promise(async resolve => {

            let response;

            await User.update(body, {where: {id: id}}).then(() => {
                response = new BasicAPIResponse('Usuario atualizado com sucesso!', false);
                resolve(response);
            }).catch((error) => {
                response = new BasicAPIResponse('Falha ao  atualizar usuario!', true);
                resolve(response);
            });

        });

    }

    static async delete(req, res) {

        let id = req.body.id;

        let response = await UserController.deleteDatabase(id);

        let status;

        if(response.response) {

            status = 400;
            console.error(`Error ao deletear Usuario! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        } else {

            status = 200;
            console.log(`Usuario deletado com sucesso! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        }

        return res.status(status).json(response);
        
    }

    static async deleteDatabase(id) {
        
        return new Promise(async resolve => {

            let response;

            await User.update({is_deleted: true, deleted_dateTime: new Date()}, {where: {id: id}}). then(() => {

                response = new BasicAPIResponse('Usuario deletado com sucesso!', false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao deletar usuario: ${error}`, true);
                resolve(response);

            });

        });

    }

    static async getOneById(req, res) {

        let id = req.params.id;

        let response = await UserController.getOneByIdDatabase(id);

        let status;

        if(response.error) {

            status = 400;
            console.error(`Error ao buscar Usuario!, Res:${response.response}`);

        } else {

            status = 200;
            console.log(`Usuario buscado com sucesso!, Res:${response.response}`);

        }

        return res.status(status).json(response.toJson())

    }

    static async getOneByIdDatabase(id) {

        return new Promise(async resolve => {

            let response;

            try {
                const findOne = await User.findByPk(id);

                response = new BasicAPIResponse(findOne, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Falha ao buscar usuario ${id}: ${error}`, true);
                resolve(response);

            }

        });

    }

    static async getAll(req, res) {

        let status;

        const response = await UserController.getAllDatabase();


        if(response.error) {

            status = 400;
            console.error(`Error ao buscar Usuarios!, Res:${response.response}`);

        }else {

            status = 200;
            console.log(`Usuarios buscado com sucesso!, Res:${response.response}`);

        }

        return res.status(status).json(response);

    }

    static async getAllDatabase() {

        return new Promise(async resolve => {

            let response;

            try{

                const findAll = await User.findAll({where: {is_deleted: false}});

                response = new BasicAPIResponse(findAll, false);

                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao busacar usuarios da tabela users: ${error}`, true);
                resolve(response);

            }

        })

    }

}