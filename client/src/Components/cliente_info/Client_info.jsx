import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Client_info.css';
import api from "../../Api/api";

const setUpdate = (props) => {

    props.preventDefault();

    let data = {
        nome: props.target[0].value,
        rua: props.target[5].value,
        numero: props.target[6].value,
        bairro: props.target[7].value,
        cep: props.target[3].value,
        cidade: props.target[8].value,
        estado: props.target[4].value,
        telefone1: props.target[10].value,
        telefone2: props.target[11].value,
        celular: props.target[9].value,
        email: props.target[12].value,
        data_nascimento: props.target[13].value,
        professora: props.target[14].value,
        data_matricula: props.target[15].value,
        responsavel: props.target[16].value,
        id: props.target[17].value
    }

    api
        .put('api/update-client', data)
        .then(resposne => {
            if(!resposne.data.error)
                document.location.reload(true);
        })
        .catch(err => console.log(err));

}

const dataClient = (data, id) => {

    let hidden

    if(data) {

        if(data.responsavel) {

            hidden = '';
    
        }else {
    
            hidden = 'hidden';
    
        }

        return(

            <div className="editForm">
                <h1>{data.nome}</h1>

                <form onSubmit={setUpdate}>

                    <div className="nome">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" defaultValue={data.nome}/>
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" defaultValue={data.cpf} disabled/>
                    </div>
                    <div>
                        <label htmlFor="rg">RG:</label>
                        <input type="text" id="rg" name="rg" defaultValue={data.rg} disabled/>
                    </div>
                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" defaultValue={data.cep}/>
                    </div>
                    <div>
                        <label htmlFor="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" defaultValue={data.estado}/>
                    </div>
                    <div>
                        <label htmlFor="rua">Rua:</label>
                        <input type="text" id="rua" name="rua" defaultValue={data.rua}/>
                    </div>
                    <div>
                        <label htmlFor="numero">Numero:</label>
                        <input type="text" id="numero" name="numero" defaultValue={data.numero}/>
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro:</label>
                        <input type="text" id="bairro" name="bairro" defaultValue={data.bairro}/>
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" defaultValue={data.cidade}/>
                    </div>
                    <div>
                        <label htmlFor="celular">Nelular:</label>
                        <input type="text" id="celular" name="celular" defaultValue={data.celular}/>
                    </div>
                    <div>
                        <label htmlFor="telefone1">Telefone 1:</label>
                        <input type="text" id="telefone1" name="telefone1" defaultValue={data.telefone1}/>
                    </div>
                    <div>
                        <label htmlFor="telefone2">Telefone 2:</label>
                        <input type="text" id="telefone2" name="telefone2" defaultValue={data.telefone2}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" defaultValue={data.email}/>
                    </div>
                    <div>
                        <label htmlFor="data_nascimento">Data de nascimento:</label>
                        <input type="date" id="data_nascimento" name="data_nascimento" defaultValue={data.data_nascimento.substr(0,10)}/>
                    </div>
                    <div>
                        <label htmlFor="professora">Professora:</label>
                        <input type="text" id="professora" name="professora" defaultValue={data.professora}/>
                    </div>
                    <div className="data_matricula">
                        <label htmlFor="data_matricula">Data da matricula:</label>
                        <input type="date" id="data_matricula" name="data_matricula" defaultValue={data.data_matricula.substr(0,10)}/>
                    </div>
                    <div className="responsavel" id={hidden}>
                        <label htmlFor="responsavel">Responsavel:</label>
                        <input type="text" id="responsavel" name="responsavel" defaultValue={data.responsavel}/>
                    </div>
                    <input defaultValue={id} disabled id="hidden"/>
                    <div className="button">
                        <button type="submit" className="editButton">Editar</button>
                    </div>
                </form>

            </div>

        );

    }

}


export default function Info() {
    
    
    const [client, setClient] = useState();

    // console.log(client);
    
    useEffect(() => {

        api
            .get(`/api/get-client/${id}`)
            .then(response => {

                if(!response.data.error) {

                    setClient(response.data.response);

                }

            })
            .catch(err => console.log(err));
        
    }, [])

    const {id} = useParams();

    return(
        <div>{dataClient(client, id)}</div>
    );

}