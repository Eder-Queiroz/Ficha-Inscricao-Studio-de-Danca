import Payment from '../../models/Payment/Payment.js';
import BasicAPIResponse from '../../models/BasicResponse/BasicAPIResponse.js';

export default class PaymentController {

    static async insert(req, res) {

        let status;

        const response = await PaymentController.insertDatabase(req.body);

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

            await Payment.create(body).then(() => {

                response = new BasicAPIResponse('Payment adicionado com sucesso!', false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao adicionar um Payment: ${error}`, true);
                resolve(response);

            });

        });

    }

    static async getAll(req, res) {

        let status;

        const response = await PaymentController.getAllDatabase();

        if(response.error) {

            status = 400;
            console.error(`Error: ${response.response}`);

        }else {

            status = 200;
            console.log(`Sucesso ao buscar payments: `, response);

        }

        return res.status(status).json(response);

    }

    static async getAllDatabase() {

        return new Promise(async resolve => {

            let response;

            try {

                const findAll = await Payment.findAll({where: {is_deleted: false}});

                response = new BasicAPIResponse(findAll, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao buscar payments ${error}`, true);
                resolve(response);

            }

        });

    }

    static async getOneById(req, res) {

        let status;

        const id = req.params.id;

        const response = await PaymentController.getOneByIdDatabase(id);
        
        if(response.error) {

            status = 400;

            console.error(`Error: ${response.response}`);

        }else {

            status = 200;

            console.log(`Payment ${id} buscado com sucesso: `, response.response);

        }

        return res.status(status).json(response);

    }

    static async getOneByIdDatabase(id) {

        return new Promise(async resolve => {

            let response;

            try {

                const findOne = await Payment.findByPk(id);

                response = new BasicAPIResponse(findOne, false);
                resolve(response);

            }catch(error) {

                response = new BasicAPIResponse(`Erro ao buscar payment ${id}: ${error}`, true);
                resolve(response);

            }

        });

    }

    static async update(req, res) {

        let status;

        const response = await PaymentController.updateDatabase(req.body);

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

            await Payment.update(body, {where: {id: body.id}}).then(() => {

                response = new BasicAPIResponse(`Payment ${body.id} atualizado com sucesso!`, false);
                resolve(response);
                
            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao Atualizar o Payment ${body.id}`, true);
                resolve(response);

            });

        });

    }

    static async delete(req, res) {

        const id = req.body.id;

        let status;

        const response = await PaymentController.deleteDatabase(id);

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

            await Payment.update({is_deleted: true, deleted_dateTime: new Date()}, {where: {
                id: id
            }}).then(() => {

                response = new BasicAPIResponse(`Payment ${id} deletado com sucesso!`, false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao deletar o Payment ${id}: ${error}`, true);
                resolve(response);

            });

        });

    }

    static async getLastPayment(req, res) {

        const clientId = req.params.client_id;

        const response = await PaymentController.getLastPaymentDatabase(clientId);
        
        let status;

        if(response.error) {

            status = 400;

            console.error(`Error: ${response.response}`);

        }else {

            status = 200;

            console.log(`Payment ${clientId} buscado com sucesso: `, response.response);

        }

        return res.status(status).json(response);

    }

    static async getLastPaymentDatabase(client_id) {

        return new Promise(async resolve => {

            let response;

            try {

                const findOneClientId = await Payment.findOne({
                    where: {
                        client_id: client_id,
                        ultimo_pagamento: true
                    }
                });

                response = new BasicAPIResponse(findOneClientId, false);
                resolve(response);

            } catch(err) {

                response = new BasicAPIResponse(err, true);
                resolve(response);

            }

        });

    }

    

}