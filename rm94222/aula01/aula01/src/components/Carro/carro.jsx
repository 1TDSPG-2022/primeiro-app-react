import React from "react";

export default function Carro() {

    let valor = 0
    const executarFuncao = (funcao) =>
    valor = valor + funcaoconsole.log(valor)

    return(

        <div>
            <figure>
                <img src={props.imgCarro} alt={props.altCarro} width ={props.widthCarro}/>
                <figcaption>
                    O bronco é bronco
                </figcaption>
            </figure>
            <h2>Lista de Carros</h2>
            <ul>
                {
                    props.listaDeCarros.map((carro,i)=>)}
                    <li>{carro}</li>
            </ul>
            <h2>APLICAÇÃO</h2>
            <div>
                {props.soma(10,10) +1}
            </div>
        </div>

)
}