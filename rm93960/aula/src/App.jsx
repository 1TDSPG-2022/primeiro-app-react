import React from "react"
import Carro from "./components/carro/Carro"
import carro_prof from './img/carro-prof.webp'

export default function App(){

    //INFORMAÇÕES PARA OS VEÍCULOS
    const altCarro = "carro de Família"
    const widthCarro = "200px"
    const legendaCarro = "Um carro para a vida inteira."
    //Lista de automóveis
    const listaDeCarros = ['Fusca','Chevete','brasilia','uno','ka','Corsa','Pálio']

    //FUNÇÃO 
    const soma = (a,b)=>{
        return a+b
    }

    return(

        <div>
            <Carro
            imgCarro={carro_prof}
            altCarro={altCarro}
            widthCarro={widthCarro}
            legendaCarro={legendaCarro}
            listaDeCarros={listaDeCarros}
            soma={soma}
            />
        </div>
    )
}