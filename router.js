import {Router} from 'express';
const routes = Router();

import UserController from './src/controllers/User/UserController.js';

// USERS
routes.post('/new-user', UserController.insert);
routes.put('/update-user/:id', UserController.update);
routes.delete('/delete-user', UserController.delete);

export default routes;