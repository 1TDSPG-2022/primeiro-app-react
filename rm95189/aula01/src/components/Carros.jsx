import React from 'react';
import carro from '../img/735_6.png'
import './Carro.css'
 

const Carros = (props, soma) => {

    const executaFunc = (funcao) => {
        
    }

    return(
        <div className="lista-carros">
            <img src={carro} alt="" />
            <h2>Lista de Carros</h2>
            <ul>
                {props.listaDeCarros.map((carro, i) =>
                <li>{carro}</li>
                )}
            </ul>

            <h2>Aplicação</h2>
            <div>
               <button onClick={props.soma(10,10)}></button>
            
            </div>
        </div>
    )
}

export default Carros;