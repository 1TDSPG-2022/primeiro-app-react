import React from 'react'
import Carro from './components/carro/carro'
import Carro_prof from './img/carro-prof.webp'

export default function App(){

    const altCarro = "Carro de família"
    const widthCarro = "200px"
    const legendaCarro = "Um carro para a vida inteira."
    const listaDeCarros = ['Fusca', 'Chevete', 'Brasília', 'Uno', 'Ka','Palio']
    const soma=(a,b)=>{
        return a+b
    }
    

    return(
        <div>
             <Carro
             imgCarro={Carro_prof}
             altCarro={altCarro}
             widthCarro={widthCarro}
             legendaCarro={legendaCarro}
             listaDeCarros={listaDeCarros}
             soma={soma}
             />
        </div>
    )
}