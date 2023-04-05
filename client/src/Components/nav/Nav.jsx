import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return(

        <nav>
            <div>
                <Link to='/'>Clientes</Link>
                <Link to='/cadastro'>Cadastro</Link>
                <Link to='/payment'>Pagamentos</Link>
            </div>
            <Link to='/'><div className="logo"></div></Link>
        </nav>

    );
};
