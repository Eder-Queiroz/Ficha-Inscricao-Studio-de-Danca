import React, {Component, useState} from "react";
import './Cadastro.css'; 
// import teste from "./teste";

const initialState = {
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: '',
    hidden: ''
}

export default class Cadastro extends Component {

    state = {...initialState}

    constructor(props) {
        super(props);
        this.getCep = this.getCep.bind(this);
        this.getBorn = this.getBorn.bind(this);
    }

    getCep(e) {

        const inputCep = e.target.value;

        fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
        .then(res => res.json())
        .then((data) => {
            
            this.setState({
                logradouro: data.logradouro,
                localidade: data.localidade,
                bairro: data.bairro,
                uf: data.uf
            });

        })
        .catch(err => console.log(err));


    }

    getBorn(props) {

        const bornDate = new Date(props.target.value);
        const currentDate = new Date()
        const year = (currentDate - bornDate) / (31540000000);

        if(year)
            return year >= 18? this.setState({hidden: 'hidden'}): this.useState({hidden:''});


    }

    render() {

        return (

            <section>
                <h1>Ficha de inscrição</h1>
                <form action="post">
                    <div className="nome">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder="Nome" id="name" name="nome"/>
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" placeholder="CPF" id="cpf" name="cpf"/>
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" placeholder="RG" id="rg" name="rg"/>
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" placeholder="cep" id="cep" name="cep" onBlur={this.getCep}/>
                    </div>
                    <div>
                        <label htmlFor="estado">Estado:</label>
                        <input type="text" placeholder="Estado" id="estado" name="estado" value={this.state.uf}/>
                    </div>
                    <div>
                        <label htmlFor="rua">Rua:</label>
                        <input type="text" placeholder="Rua" id="rua" name="rua" value={this.state.logradouro}/>
                    </div>
                    <div>
                        <label htmlFor="numero">Numero:</label>
                        <input type="number" placeholder="Numero" id="numero" name="numero"/>
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" placeholder="Bairro" id="bairro" name="bairro" value={this.state.bairro}/>
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" placeholder="Cidade" id="cidade" name="cidade" value={this.state.localidade}/>
                    </div>
                    <div>
                        <label htmlFor="celular">Celular:</label>
                        <input type="text" placeholder="Celular" id="celular" name="celular"/>
                    </div>
                    <div>
                        <label htmlFor="telefone1">Telefone1:</label>
                        <input type="text" placeholder="Telefone1" id="telefone1" name="telefone1"/>
                    </div>
                    <div>
                        <label htmlFor="telefone2">Telefone2:</label>
                        <input type="text" placeholder="Telefone2" id="telefone2" name="telefone2"/>
                    </div>
                    <div>
                        <label htmlFor="email">email:</label>
                        <input type="text" placeholder="Email" id="email" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="data_nascimento">Data de Nascimento:</label>
                        <input type="date" placeholder="Data Nascimento" id="data_nascimento" name="data_nascimento" onBlur={this.getBorn}/>
                    </div>
                    <div>
                        <label htmlFor="professora">Professora:</label>
                        <input type="text" placeholder="Professora" id="professora" name="professora"/>
                    </div>
                    <div className="data_matricula">
                        <label htmlFor="data_matricula">Data Matricula</label>
                        <input type="date" name="data_matricula" id="data_matricula" placeholder="data da matricula"/>
                    </div>
                    <div className="responsavel" id={this.state.hidden}>
                        <label htmlFor="responsavel">Responsavel: </label>
                        <input type="text" name="responsavel" id="responsavel" placeholder="Nome do responsavel"/>
                    </div>
                    
                    <div className="button">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </section>

        );

    }

}