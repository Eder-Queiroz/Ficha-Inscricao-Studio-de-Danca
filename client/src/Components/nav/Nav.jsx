import React from "react";
import './Nav.css';

export default props => {
    return(

        <nav>
            <div>
                <a href="#">Clients</a>
                <a href="#">Cadastro</a>
            </div>
            <a href="#"><div className="logo"></div></a>
        </nav>

    );
};
