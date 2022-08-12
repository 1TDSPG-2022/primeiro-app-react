import React from "react";

export default function Carros(props) {

    var  numero = 0

    return (
        <div>
            <img src={props.imgCarro} alt={props.altCarro} width={props.widthCarro}/>
            <figcaption>{props.figcaptionCarro }</figcaption>
            <h2>Lista de Carros</h2>
            <ul>
                {
                    props.listaDeCarros.map((carro, index) => 
                        <li key={carro}>{index+1} - {carro}</li>
                    )
                }
            </ul>
            <h2>APLICAÇÃO</h2>
            <div>
                <button onClick={()=>{
                    numero = props.soma(numero, 1)
                    console.log(numero)}}>{numero}</button>
            </div>
        </div>
    );
}