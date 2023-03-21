import {Router} from 'express';
const routes = Router();

import UserController from './src/controllers/User/UserController.js';
import ClientController from './src/controllers/Client/ClientController.js';

// USERS
routes.post('/new-user', UserController.insert);
routes.put('/update-user/:id', UserController.update);
routes.delete('/delete-user', UserController.delete);
routes.get('/get-user/:id', UserController.getOneById);
routes.get('/get-users', UserController.getAll);

// CLIENT
routes.post('/new-client', ClientController.insert);
routes.get('/get-clients', ClientController.getAll);
routes.get('/get-client/:id', ClientController.getOneById);
routes.put('/update-client', ClientController.update);
routes.delete('/delete-client', ClientController.delete);

export default routes;