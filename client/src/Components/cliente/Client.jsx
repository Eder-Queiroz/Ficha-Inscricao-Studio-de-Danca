import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faTrash, faMoneyBill, faCalendarDays, faSearch} from '@fortawesome/free-solid-svg-icons'

import "./Client.css";

const api = axios.create({
    baseURL: "http://localhost:3001"
});

const getSearchClients = search => {

    const clients = document.querySelectorAll('.client');

    clients.forEach(client => {

        const client_name = client.querySelector('h3').innerText.toLocaleLowerCase();

        client.style.display = 'flex';

        if(!client_name.includes(search)) {

            client.style.display = 'none';

        }

    });

}

const getSearch = props => {

    const search = props.target.value.toLocaleLowerCase();

    if(search) {

        getSearchClients(search);

    }

}

export default function Client() {

    const [clients, setClients] = useState();

    // console.log(clients);

    useEffect(() => {

        api
            .get('/api/get-clients')
            .then((response) => {

                if(!response.data.error) {

                    setClients(response.data.response);

                }
                
            })
            .catch(err => console.log(err));
            
        }, [])

    return(
        <div className="clients">

            <h1>Clients</h1>

            <div className="search">
                <input type="text" name="search" id="search" placeholder="Pesquisar" onKeyUp={e => getSearch(e)}/>
                <button className="btn-search"><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            <ul>

            {
                typeof clients !== 'undefined' && clients.map((value) => {

                    return (
                        <li key={value.id} className="client">
                            <h3 className="nome">{value.nome}</h3>
                            <div>
                                <a href="#"><FontAwesomeIcon icon={faCircleInfo} /></a>
                                <a href="#" className="money"><FontAwesomeIcon icon={faMoneyBill} /></a>
                                <a href="#" className="calendar"><FontAwesomeIcon icon={faCalendarDays} /></a>
                                <a href="#" className="trash"><FontAwesomeIcon icon={faTrash} /></a>
                            </div>
                        </li>
                    );

                })
            }

            </ul>

        </div>
    );

}