import React from 'react'
import carro1 from '../../img/carro1.jpg'

export default function Carro(props) {
  return (
    <div>
      <figure>
        <img src={carro1} alt="Carro Bruto!" width="300px" />
        <figcaption>O Bronco é BRONCO!</figcaption>
      </figure>
      <ul>
        <li>Renegade</li>
        <li>NSX-Acura</li>
        <li>Fusca</li>
        <li>Opala</li>
        <li>IX-35</li>
      </ul>
      <figure>
        <img
          src={props.imgCarro}
          alt={props.altCarro}
          width={props.widthCarro}
        />
        <figcaption>{props.legendaCarro}</figcaption>
      </figure>
      <h2>Lista de Carros</h2>
      <ul>
        {props.listaDeCarros.map((carro, i) => (
          <li>{carro}</li>
        ))}
      </ul>

      <h2>Aplicação</h2>
      <div>{props.soma(10, 10) + 1}</div>
    </div>
  )
}
