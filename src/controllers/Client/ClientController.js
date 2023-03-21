import Client from '../../models/Client/Client.js';
import BasicAPIResponse from '../../models/BasicResponse/BasicAPIResponse.js';
import { where } from 'sequelize';

export default class ClientController {

    static async insert(req, res) {

        let status;

        const response = await ClientController.insertDatabase(req.body);

        if(response.error) {

            status = 400;
            console.error(response.response);

        }else {

            status = 200;
            console.log(response.response);

        }

        return res.status(status).json(response);

    }

    static async insertDatabase(body) {

        return new Promise(async resolve => {            

            let response;

            await Client.create(body).then(() => {

                response = new BasicAPIResponse('Client adicionado com sucesso!', false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao adicionar um Client: ${error}`, true);
                resolve(response);

            });

        });

    }

    static async getAll(req, res) {

        let status;

        const response = await ClientController.getAllDatabase();

        if(response.error) {

            status = 400;
            console.error(`Error: ${response.response}`);

        }else {

            status = 200;
            console.log(`Sucesso ao buscar usuarios: `, response);

        }

        return res.status(status).json(response);

    }

    static async getAllDatabase() {

        return new Promise(async resolve => {

            let response;

            try {

                const findAll = await Client.findAll({where: {is_deleted: false}});

                response = new BasicAPIResponse(findAll, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao buscar clients ${error}`, true);
                resolve(response);

            }

        });

    }

    static async getOneById(req, res) {

        let status;

        const id = req.params.id;

        const response = await ClientController.getOneByIdDatabase(id);
        
        if(response.error) {

            status = 400;

            console.error(`Error: ${response.response}`);

        }else {

            status = 200;

            console.log(`Usuario ${id} buscado com sucesso: `, response.response);

        }

        return res.status(status).json(response);

    }

    static async getOneByIdDatabase(id) {

        return new Promise(async resolve => {

            let response;

            try {

                const findOne = await Client.findByPk(id);

                response = new BasicAPIResponse(findOne, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao buscar usurio ${id}: ${error}`, true);
                resolve(response);

            }

        });

    }

    static async update(req, res) {

        let status;

        const response = await ClientController.updateDatabase(req.body);

        if(response.error) {

            status = 400;
            console.error('Error: ', response.response);

        }else {

            status = 200;
            console.log(response.response);

        }

        return res.status(status).json(response);

    }

    static async updateDatabase(body) {

        return new Promise(async resolve => {

            let response;

            await Client.update(body, {where: {id: body.id}}).then(() => {

                response = new BasicAPIResponse(`Client ${body.id} atualizado com sucesso!`, false);
                resolve(response);
                
            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao Atualizar o Client ${body.id}`, true);
                resolve(response);

            });

        });

    }

    static async delete(req, res) {

        const id = req.body.id;

        let status;

        const response = await ClientController.deleteDatabase(id);

        if(response.error) {

            status = 400;
            console.error("Error: ", response.response);

        }else {

            status = 200;
            console.log(response.response);

        }

        return res.status(status).json(response);

    }

    static async deleteDatabase(id) {

        return new Promise(async resolve => {

            let response;

            await Client.update({is_deleted: true, deleted_dateTime: new Date()}, {where: {
                id: id
            }}).then(() => {

                response = new BasicAPIResponse(`Client ${id} deletado com sucesso!`, false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao deletar o Client ${id}: ${error}`, true);
                resolve(response);

            });

        });

    }

}