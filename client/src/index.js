import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main/Main';

// configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Client from './Components/cliente/Client';
import Cadastro from './Components/cadastro/Cadastro';
import ClientInfo from './Components/cliente_info/Client_info';
import Payment from './Components/payment/Payment';
import PaymentClient from './Components/payment_client/PaymentClient';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Client />
            },
            {
                path: '/Cadastro',
                element: <Cadastro />
            },
            {
                path: '/Clientes/:id',
                element: <ClientInfo />
            },
            {
                path: '/payment',
                element: <Payment />
            },
            {
                path: '/Payment/:id',
                element: <PaymentClient />
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));