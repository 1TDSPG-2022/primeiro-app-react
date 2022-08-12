import React from "react";

export default function ListaCarros(props){

    let valor = 0
    const executaFuncao = (funcao)=>{
        valor = valor + funcao
        console.log(valor)
    }
    return(     
        <div>
            <ul>
                {
                props.cars.map((carro, i)=>
                <li><img src={carro} alt="" width={props.widthCarro}/></li>)
                }
            </ul>
            <h2>Aplicação</h2>
            <div>
                <button onClick={executaFuncao(props.Soma(10,10))}>Somar</button>
                <span>valor : {valor}</span>
            </div>
        </div>
    )
}