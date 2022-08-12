import React from "react";
import carro from './carro'
import carro-prof from '../img/carro-prof.webp'

export default function App () {

    const altCarro = "Carro de familia"
    const  widthCarro = "200px"
    const legendaCarro = "Um carro para a vida inteira"
    const listaDeCarros = ['Fusca','Chevete','Brasilia','Uno','Ka']

    const soma = (a,b) => {
        return a+b
    }
    
    return(
        <div>
            <Carro
            imgCarro = {carro_prof}
            altCarro = {altCarro}
            widthCarro = {widthCarro}
            legendaCarro = {legendaCarro}
            listaDeCarros = {listaDeCarros}
            soma = {soma}
            />
        </div>
        )   
}