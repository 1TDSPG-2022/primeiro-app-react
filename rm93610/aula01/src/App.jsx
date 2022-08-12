import React from 'react'
import Carro from './components/Carro'
import carro_prof from './img/carro-prof-webp'

export default function App(){

        //INFORMAÇÕES PARA OS VEÍCULOS
        const altCarro = "Carro de Família"
        const widthCarro = "200px"
        const legendaCarro = "Um carro para a vida inteira."
        //Lista de carros
        const listaDeCarros = ["Chevet", "Celta", "Corsel"]


    return(
        <div>
            <Carro
                imgCarro = {carro_prof}
                altCarro = {altCarro}
                widthCarro = {widthCarro}
                legendaCarro = {legendaCarro}
                listaDeCarros = {listaDeCarros}
            />
        </div>
    )
}