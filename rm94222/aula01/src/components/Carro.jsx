import React from 'react'

export default function Carro(props){
    return(
        <ul>
            <li>{props.carros[0]}</li>
            <li>{props.carros[1]}</li>
            <li>{props.carros[2]}</li>
            <li>{props.carros[3]}</li>
            <li>{props.carros[4]}</li>
            <li>{props.maisCarro()}</li>
        </ul>
    )
}