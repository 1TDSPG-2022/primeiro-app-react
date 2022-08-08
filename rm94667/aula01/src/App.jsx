import React from 'react'
import Cabecalho from './components/cabecalho/Cabecalho'
import Carro from './components/Carro/Carro'

export default function App(){

    const tag = <strong>Olá React!!</strong>

    return(
        <div>
            <Cabecalho/>
            <Carro/>
            <h1>{tag}</h1>
        </div>
    )
}