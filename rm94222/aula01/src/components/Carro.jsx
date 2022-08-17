import React from 'react'

export default function Carro(props) {

    let valor = 0
    const executaFuncao = (funcao)=>{
        valor = valor + funcao
        console.log(valor)
    }

  return (
    <div>

        <figure>
            <img src={props.imgCarro} alt={props.altCarro} width={props.widthCarro}/>
            <figcaption>{props.legendaCarro}</figcaption>
        </figure>
        <h2>Lista de Carros</h2>
        <ul>
            {
                props.listaDeCarros.map((carro,i)=>
                <li>{carro}</li>
            )}
        </ul>
        <h2>APLICAÇÃO</h2>
        <div>
            <button onClick={executaFuncao(props.soma(10,10))}>SOMAR</button>
            <span>VALOR : {valor}</span>
        </div>
    </div>
  )
}
Footer
© 2022 GitHub, Inc.