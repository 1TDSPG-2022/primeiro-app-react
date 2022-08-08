import React from 'react'

import carro1 from '../../img/bronco.jpg'

export default function Carro(){

    return (

        <div>
            <figure>
            <img src={carro1} alt="Carro Bruto!" width="300px" />
            <figcaption>
                O Rolls Royce é RR
            </figcaption>
            </figure>

            <ul>
                <li>Renegade</li>
                <li>NSX-Acura</li>
                <li>Fusca</li>
                <li>Opala</li>
                <li>IX35</li>
            </ul>
        </div>

    )
}

    