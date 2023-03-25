import ClassesTime from '../../models/ClassesTime/ClassesTime.js';
import BasicAPIResponse from '../../models/BasicResponse/BasicAPIResponse.js';

export default class ClassesTimeController {

    static async insert(req, res) {

        let status;

        const response = await ClassesTimeController.insertDatabase(req.body);

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

            await ClassesTime.create(body).then(() => {

                response = new BasicAPIResponse('Classes Time adicionado com sucesso!', false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao adicionar um Classes Time: ${error}`, true);
                resolve(response);

            });

        });

    }

    static async getAll(req, res) {

        let status;

        const response = await ClassesTimeController.getAllDatabase();

        if(response.error) {

            status = 400;
            console.error(`Error: ${response.response}`);

        }else {

            status = 200;
            console.log(`Sucesso ao buscar Classes Time: `, response);

        }

        return res.status(status).json(response);

    }

    static async getAllDatabase() {

        return new Promise(async resolve => {

            let response;

            try {

                const findAll = await ClassesTime.findAll({where: {is_deleted: false}});

                response = new BasicAPIResponse(findAll, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao buscar Classes Time ${error}`, true);
                resolve(response);

            }

        });

    }

    static async getOneById(req, res) {

        let status;

        const id = req.params.id;

        const response = await ClassesTimeController.getOneByIdDatabase(id);
        
        if(response.error) {

            status = 400;

            console.error(`Error: ${response.response}`);

        }else {

            status = 200;

            console.log(`Classes Time ${id} buscado com sucesso: `, response.response);

        }

        return res.status(status).json(response);

    }

    static async getOneByIdDatabase(id) {

        return new Promise(async resolve => {

            let response;

            try {

                const findOne = await ClassesTime.findByPk(id);

                response = new BasicAPIResponse(findOne, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao buscar Classes Time ${id}: ${error}`, true);
                resolve(response);

            }

        });

    }

    static async update(req, res) {

        let status;

        const response = await ClassesTimeController.updateDatabase(req.body);

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

            await ClassesTime.update(body, {where: {id: body.id}}).then(() => {

                response = new BasicAPIResponse(`Classes Time ${body.id} atualizado com sucesso!`, false);
                resolve(response);
                
            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao Atualizar o Classes Time ${body.id}`, true);
                resolve(response);

            });

        });

    }

    static async delete(req, res) {

        const id = req.body.id;

        let status;

        const response = await ClassesTimeController.deleteDatabase(id);

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

            await ClassesTime.update({is_deleted: true, deleted_dateTime: new Date()}, {where: {
                id: id
            }}).then(() => {

                response = new BasicAPIResponse(`Classes Time ${id} deletado com sucesso!`, false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao deletar o Classes Time ${id}: ${error}`, true);
                resolve(response);

            });

        });

    }

}