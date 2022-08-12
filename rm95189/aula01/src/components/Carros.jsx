import React from 'react';
import carro from '../img/735_6.png'
import './Carro.css'
 

const Carros = (props) => {

    return(
        <div className="lista-carros">
            <img src={carro} alt="" />
            <h2>Lista de Carros</h2>
            <ul>
                {props.listaDeCarros.map((carro, i) =>
                <li>{carro}</li>
                )}
            </ul>
        </div>
    )
}

export default Carros;