import React from 'react'
import carro1 from '../../img/carro1.jpg'

export default function Carro() {
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
    </div>
  )
}
