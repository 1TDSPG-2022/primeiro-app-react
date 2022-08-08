import React from "react"

import carro1 from '../img/lancer.jpg'

export default function Carro(){

    return(
       <div>
        <img src={carro1} alt="Lancer de vilão" width="300px" />
       <ul>
        <li>Renegad</li>
        <li>Astra</li>
        <li>X6</li>
        <li>Golf GTI</li>
        <li>Nivus</li>
       </ul>
       
       </div> 
    )
}