import React from 'react'
import Carros from './components/carros/Carros'
import carro1 from './imgs/carro-prof.webp'


export default function App(){

    const tag = <strong>PUTS</strong>
    const altCarro = 'Fusca'
    const widthCarro = '200'
    const figcaptionCarro = 'Fusca'
    const listaDeCarros = ['Fusca', 'Gol', 'Uno', 'Palio', 'Brasilia']

    const soma = (a,b) =>{
        return a+b
    }

    return(
        <div>
            <h1>{tag}</h1>
            <Carros 
                altCarro={altCarro}
                widthCarro={widthCarro}
                figcaptionCarro={figcaptionCarro}
                imgCarro={carro1}
                listaDeCarros={listaDeCarros}
                soma={soma}
            />
        </div>
    )
}