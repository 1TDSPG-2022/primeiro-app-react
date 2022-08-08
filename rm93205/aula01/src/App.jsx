import React from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {
    
    const tag = <strong>"Ola React!!"</strong>

    return (
        <div>
            <Cabecalho/>
            <h1>{tag}</h1>
        </div>
    )
}