import React from 'react'
import "./css/index.css"
import ReactDom from 'react-dom'
import App from "./app"
import Cabecalho from "./Componentes/cabecalho"
import Carro from "./Componentes/carros"

ReactDom.render(
    <App></App>,
    document.getElementById("root")
)