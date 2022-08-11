import React from "react";
import carro1 from './img/carro1.jpg'
import carro2 from './img/Camaro.png'
import carro3 from './img/relampago.png'
import carro4 from './img/TRATORDESTRUIDOR.png'

export default function carros(){
    return(
        <>
        <div>
            <img src={carro1} alt="carro" />
        </div>
        <div>
        <img src="https://qcveiculos.com.br/wp-content/uploads/2016/09/chevrolet_spark_rs_concept-1.jpg" alt="carro" />
        </div>
        </>
    )
    }