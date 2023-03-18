import BasicAPIResponse from "../../models/BasicResponse/BasicAPIResponse.js";
import User from "../../models/User/User.js";
// const bcrypt = require('bcrypt');
import bcrypt from "bcrypt";

export default class UserController {

    static async insert(req, res) {

        const password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;
        
        let response = await UserController.insertDatabase(req.body);

        let status;

        if(response.error) {

            status = 400;
            console.error(`Error ao inserir Usuario! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        }else {

            status = 200;
            console.log(`Usuario inserido com sucesso! Req: ${JSON.stringify(req.body)}, Res:${response.response}`);

        }

        return res.status(status).json(response);

    }

    static async insertDatabase(body) {

        return new Promise(async (resolve, reject) => {

            let response;

            User.create(body).then(() => {

                response = new BasicAPIResponse('Usuario criado com sucesso!', false);
                resolve(response);

            }).catch((error) => {

                response = new BasicAPIResponse(`Falha ao cadastrar usuario: ${error}`, true);
                resolve(response);

            });

        });

    }

}