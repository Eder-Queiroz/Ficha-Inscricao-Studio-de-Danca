import {Router} from 'express';
const routes = Router();

import UserController from './src/controllers/User/UserController.js';
import ClientController from './src/controllers/Client/ClientController.js';
import PaymentController from './src/controllers/Payment/PaymentController.js';
import ClassesTimeController from './src/controllers/ClassesTime/ClassesTimeController.js';

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

// Payment
routes.post('/new-payment', PaymentController.insert);
routes.get('/get-payments', PaymentController.getAll);
routes.get('/get-payment/:id', PaymentController.getOneById);
routes.put('/update-payment', PaymentController.update);
routes.delete('/delete-payment', PaymentController.delete);

// ClassesTime
routes.post('/new-classesTime', ClassesTimeController.insert);
routes.get('/get-classesTimes', ClassesTimeController.getAll);
routes.get('/get-classesTime/:id', ClassesTimeController.getOneById);
routes.put('/update-classesTime', ClassesTimeController.update);
routes.delete('/delete-classesTime', ClassesTimeController.delete);

export default routes;