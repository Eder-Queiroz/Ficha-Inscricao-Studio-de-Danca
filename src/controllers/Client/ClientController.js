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

            let params = {
                nome: body.nome,
                rua: body.rua,
                numero: body.numero,
                bairro: body.bairro,
                cep: body.cep,
                cidade: body.cidade,
                estado: body.estado,
                telefone1: body.telefone1,
                telefone2: body.telefone2,
                celular: body.celular,
                email: body.email,
                data_nascimento: body.data_nascimento,
                cpf: body.cpf,
                rg: body.rg,
                professora: body.professora,
                data_matricula: body.data_matricula,
                responsavel: body.responsavel,
                is_deleted: false
            }

            await Client.create(params).then(() => {

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