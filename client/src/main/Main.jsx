import React, {Component} from "react";
import './Main.css';

import Nav from "../Components/Nav";
import Cadastro from "../Components/Cadastro";

export default class Main extends Component {

    render() {

        return(
            <div>
                <Nav />
                <Cadastro />
            </div>
        );

    }

}