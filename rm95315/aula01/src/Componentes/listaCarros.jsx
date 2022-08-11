import React from "react";
import carro1 from './img/carro1.jpg'
import carro2 from './img/Camaro.png'
import carro3 from './img/relampago.png'
import carro4 from './img/TRATORDESTRUIDOR.png'


export default function ListaCarros(props){
    const listacarros = [{carro1}, {carro2},{carro3},{carro4}]
    return(
        <>
        <ul>
            <li>{props.listacarros[0]}</li>
            <li>{props.listacarros[1]}</li>
            <li>{props.listacarros[2]}</li>
            <li>{props.listacarros[3]}</li>
        </ul>
    </>
    )
}