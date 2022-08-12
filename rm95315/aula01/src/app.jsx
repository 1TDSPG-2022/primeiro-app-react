import React from "react";
import Cabecalho from "./Componentes/cabecalho";
import Carros from "./Componentes/carros";
import Parceiros from "./Componentes/Parceiros";
import ListaCarros from "./Componentes/listaCarros";
import carro1 from './Componentes/img/carro1.jpg'
import carro2 from './Componentes/img/Camaro.png'
import carro3 from './Componentes/img/relampago.png'
import carro4 from './Componentes/img/TRATORDESTRUIDOR.png'
import Calculo from "./Componentes/funcao";


const alunos = ["luis", "alexandre", "allen"]

const listaCarros = [{carro1},{carro2},{carro3},{carro4}]

export default function app(){

    return(
        <div>
            <Cabecalho></Cabecalho>
            <Parceiros></Parceiros>
            <Calculo numero1 = {2} numero2 = {2}/>
            <ListaCarros cars ={listaCarros}/>
        </div>
    )
}