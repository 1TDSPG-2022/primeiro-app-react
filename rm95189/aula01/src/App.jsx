import React from "react";
import Cabecalho from "./components/Cabecalho";
import Carro from "./components/Carros";
export default function App(){
    // const tag = <strong>"Ola react!!"</strong>
    //lista de automoveis

    const listaDeCarros = ['Fusca', 'Chevete', 'Brasilia', 'Uno', 'Ka']

    return(
        <div>
            <Cabecalho/>
            <Carro 
            listaDeCarros = {listaDeCarros}
            />
        </div>
    )
}