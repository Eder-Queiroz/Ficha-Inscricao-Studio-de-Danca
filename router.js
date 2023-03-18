import {Router} from 'express';
const routes = Router();

import UserController from './src/controllers/User/UserController.js';

// USERS
routes.post('/new-user', UserController.insert);

export default routes;