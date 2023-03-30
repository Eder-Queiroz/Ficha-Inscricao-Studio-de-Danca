import React, {Component} from "react";
import './Main.css';

import Nav from "../Components/nav/Nav";
// import Cadastro from "../Components/cadastro/Cadastro";
import Client from '../Components/cliente/Client'

export default class Main extends Component {

    render() {

        return(
            <div>
                <Nav />
                <Client />
            </div>
        );

    }

}