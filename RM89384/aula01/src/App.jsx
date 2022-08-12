import React from "react";
import Carro from "./componentes/Carro/Carro"; //Todo import Exceto o React, significa que é filho de app
import veraneio from './img/veraneio.webp'

export default function App(){

    //Informação para veiculos
    const altCarro = "Carro de familia"
    const widthCarro = "200"
    const legendaCarro = "Um carro para a vida inteira."
    
    //Lista de automóveis
    const listaDeCarros = ["Fusca", "Chevete", "Brasilia", "Uno", "Ka"]

    //Função
    const soma = (a,b)=>{
        return a+b
    }

    return(
        <div>
            <Carro 
                //Atributos do componente
                imgCarro = {veraneio} 
                altCarro = {altCarro}
                widCarro = {widthCarro}
                legendaCarro = {legendaCarro}
                listaDeCarros = {listaDeCarros }
                soma = {soma}
            /> 
        </div>
    )
}