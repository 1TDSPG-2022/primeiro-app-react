import React from "react";
import Cabecalho from "./Componentes/cabecalho";
import Carros from "./Componentes/carros";
import Parceiros from "./Componentes/Parceiros";

export default function app(){

    return(
        <div>
            <Cabecalho></Cabecalho>
            <Carros></Carros>
            <Parceiros></Parceiros>
        </div>
    )
}
