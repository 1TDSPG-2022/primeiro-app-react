import React from "react";
import Cabecalho from "./Componentes/cabecalho";
// import Carros from "./Componentes/carros";
import Parceiros from "./Componentes/Parceiros";
import ListaCarros from "./Componentes/listaCarros";
import carro_1 from './img/carro1.jpg'
import carro2 from './img/Camaro.png'
import carro3 from './img/relampago.png'
import carro4 from './img/TRATORDESTRUIDOR.png'
import Calculo from "./Componentes/funcao";
import carro5 from './img/DESTRUICAOEMMASSA.jpg'

const listaCarros = [carro_1,carro2,carro3,carro4,carro5]
const comentarioCarros = ["carro fofo", "Maneiro", "assustador", "carro de louco"]
const widthCarro = '129412'
const primeiroNum = 20
const segundoNum = 8

export default function app(){
    
    const Soma = (a,b)=>{
        return a+b
    }
    return(
        <div>
            <Cabecalho></Cabecalho>
            <Parceiros></Parceiros>
            <Calculo numero1 = {primeiroNum} numero2 = {segundoNum}/>
            <ListaCarros cars ={listaCarros} comentario = {comentarioCarros} Soma = {Soma} widthCarro = {widthCarro}/>
            {/* <Carros/> */}
        </div>
    )
}