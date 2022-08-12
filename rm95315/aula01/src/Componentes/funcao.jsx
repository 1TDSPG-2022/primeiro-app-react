import React from "react";

export default function Calculo(props, numero1, numero2){
    const resultado = (numero1, numero2) =>{ 
        return (props.numero1 * props.numero2)
    }
    return(
        <span>o resultado da multiplicação entre {props.numero1} e {props.numero2} é: {resultado()}</span>
    )
}