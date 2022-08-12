import React from "react";

export default function ListaCarros(props){
    return(
        <ul>
            <li><img src={props.cars[0]} alt="carro0" /></li>
            <li><img src={props.cars[1]} alt="carro1" /></li>
            <li><img src={props.cars[2]} alt="carro2" /></li>
            <li><img src={props.cars[3]} alt="carro3" /></li>
        </ul>
    )
}