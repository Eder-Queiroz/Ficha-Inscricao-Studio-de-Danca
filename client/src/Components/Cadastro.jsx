import React, {Component, useState} from "react";
import './Cadastro.css';
import axios from 'axios';
// import teste from "./teste";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const initialState = {
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: '',
    nome: '',
    cpf: '',
    rg: '',
    cep: '',
    numero: '',
    celular: '',
    telefone1: '',
    telefone2: '',
    email: '',
    data_nascimento: '',
    professora: '',
    data_matricula: '',
    responsavel: '',
    hidden: ''
}

export default class Cadastro extends Component {

    state = {...initialState}

    constructor(props) {
        super(props);
        this.getCep = this.getCep.bind(this);
        this.getBorn = this.getBorn.bind(this);
        this.sendInscricao = this.sendInscricao.bind(this);
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
            return year >= 18? this.setState({hidden: 'hidden'}): this.setState({hidden:''});


    }

    sendInscricao = async (props) => {
        props.preventDefault();

        // const [user, setUser] = useState();

        let data = {
            nome: this.state.nome,
            rua: this.state.logradouro,
            numero: this.state.numero,
            bairro: this.state.bairro,
            cep: this.state.cep,
            cidade: this.state.localidade,
            estado: this.state.uf,
            telefone1: this.state.telefone1,
            telefone2: this.state.telefone2,
            celular: this.state.celular,
            email: this.state.email,
            data_nascimento: this.state.data_nascimento,
            cpf: this.state.cpf,
            rg: this.state.rg,
            professora: this.state.professora,
            data_matricula: this.state.data_matricula,
            responsavel: this.state.responsavel
        }

        api
            .post("/api/new-client", data)
            .then((response) => {
                
                if(!response.data.error) {

                    this.setState({...initialState});

                }

            })
            .catch((err) => {
                console.error("Ops! ocorreu um erro" + err);
            });

        // console.log(user);

    }

    render() {

        return (

            <section>
                <h1>Ficha de inscrição</h1>
                <form onSubmit={this.sendInscricao}>
                    <div className="nome">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" placeholder="Nome" id="name" name="nome" value={this.state.nome} onChange={e => this.setState({nome: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" placeholder="CPF" id="cpf" name="cpf" value={this.state.cpf} onChange={e => this.setState({cpf: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" placeholder="RG" id="rg" name="rg" value={this.state.rg} onChange={e => this.setState({rg: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" placeholder="cep" id="cep" name="cep" value={this.state.cep} onBlur={this.getCep} onChange={e => this.setState({cep: e.target.value})}/>
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
                        <input type="number" placeholder="Numero" id="numero" name="numero" value={this.state.numero} onChange={e => this.setState({numero: e.target.value})}/>
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
                        <input type="text" placeholder="Celular" id="celular" name="celular" value={this.state.celular} onChange={e => this.setState({celular: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="telefone1">Telefone1:</label>
                        <input type="text" placeholder="Telefone1" id="telefone1" name="telefone1" value={this.state.telefone1} onChange={e => this.setState({telefone1: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="telefone2">Telefone2:</label>
                        <input type="text" placeholder="Telefone2" id="telefone2" name="telefone2" value={this.state.telefone2} onChange={e => this.setState({telefone2: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="email">email:</label>
                        <input type="text" placeholder="Email" id="email" name="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="data_nascimento">Data de Nascimento:</label>
                        <input type="date" placeholder="Data Nascimento" id="data_nascimento" name="data_nascimento" value={this.state.data_nascimento} onBlur={this.getBorn} onChange={e => this.setState({data_nascimento: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="professora">Professora:</label>
                        <input type="text" placeholder="Professora" id="professora" name="professora" value={this.state.professora} onChange={e => this.setState({professora: e.target.value})}/>
                    </div>
                    <div className="data_matricula">
                        <label htmlFor="data_matricula">Data Matricula</label>
                        <input type="date" name="data_matricula" id="data_matricula" placeholder="data da matricula" value={this.state.data_matricula} onChange={e => this.setState({data_matricula: e.target.value})}/>
                    </div>
                    <div className="responsavel" id={this.state.hidden}>
                        <label htmlFor="responsavel">Responsavel: </label>
                        <input type="text" name="responsavel" id="responsavel" placeholder="Nome do responsavel" value={this.state.responsavel} onChange={e => this.setState({responsavel: e.target.value})}/>
                    </div>
                    
                    <div className="button">
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </section>

        );

    }

}