import React from 'react'

export default function Carro(props) {
  return (

    <div>
        <figure>
            <img src={props.imgCarro} alt={props.altCarro} width={props.widthCarro}/>
            <figcaption>{props.legendaCarro}</figcaption>
        </figure>
        <h2>Lista de Carros</h2>
        <ul>
            {
                props.listaDeCarros.map((carro,i)=>
                <li>{carro}</li>
            )}
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
