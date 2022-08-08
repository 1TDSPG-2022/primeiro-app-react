import React from "react";
import carro from './img/carro1.jpg'

export default function carros(){
    return(
        <>
        <div>
            <img src={carro} alt="carro" />
        </div>
        <div>
        <img src="https://qcveiculos.com.br/wp-content/uploads/2016/09/chevrolet_spark_rs_concept-1.jpg" alt="carro" />
        </div>
        <ul>
            <li>Fusca</li>
            <li>Renegade</li>
            <li>Opala</li>
        </ul>
        </>
    )
}