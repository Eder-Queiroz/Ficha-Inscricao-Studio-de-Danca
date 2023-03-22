import React, {Component} from "react";
import './Cadastro.css';

export default class Cadastro extends Component {

    render() {

        return (

            <section>
                <h1>Ficha de inscrição</h1>
                <form action="post">

                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="cep"/>
                    <input type="text" placeholder="Rua"/>
                    <input type="text" placeholder="Numero"/>
                    <input type="text" placeholder="Bairro"/>
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="Estado"/>
                    <input type="text" placeholder="Celular"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Data Nascimento"/>
                    <input type="text" placeholder="CPF"/>
                    <input type="text" placeholder="Professora"/>

                </form>
            </section>

        );

    }

}