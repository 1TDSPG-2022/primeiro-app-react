import React from 'react'

export default function carro(props) { //passagem de parametros, passagem de pai para filho, 
    //propriedades atreladas ao componente
  return (
    <div>
        <figure>
            <img src={props.imgCarro} alt={props.altCarro} width={props.widthCarro} />
            <figcaption>{props.legendaCarro}</figcaption>
        </figure>
        <h2>Lista de Carros</h2>
        <ul>
            {
                props.listaDeCarros.map((carro)=>
                <li>{carro}</li>
                ) //a cada interação ele tira um carro
            }

        </ul>
        <h2>APLICAÇÃO</h2>
        <div>
            {
            props.soma(10,10)
            } 
        </div>

    </div>
  )
}
//função precisa de parenteses //