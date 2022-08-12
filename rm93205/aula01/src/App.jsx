import React from "react";
import Carro from "./components/Cabecalho/Carro";
import Carro1 from "./img/carro.jpg";

export default function App() {
    
    const tag = <strong>"Ola React!!"</strong>
    const altCarro = 'Palio'
    const widthCarro = '200'
    const figcaptionCarro = 'Carro dahora'
    //Lista de carros
    const listaDeCarros = ['Fusca','Chevette','Brasilia','Uno','Ka','Palio']

    //Função 
    const soma = (a,b) =>{
        let c = a + b
        return c
    }

    return (
        <div>
            <h1>{tag}</h1>
            <Carro 
                imgCarro={Carro1}
                altCarro={altCarro}
                widthCarro={widthCarro}
                figcaptionCarro={figcaptionCarro}
                listaDeCarros={listaDeCarros}
                soma={soma}
            />
        </div>
    )
}