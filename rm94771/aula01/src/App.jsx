import React from 'react'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Carro from './components/Carro/Carro'
import carro_prof from './img/carro-prof.webp'

export default function App() {
  const tag = <strong>Olá React!</strong>

  // Informações para Veiculo
  const altCarro = 'Carro de Familia'
  const widthCarro = '200px'
  const legendaCarro = 'Um carro para a vida inteira.'

  // Lista de Automóvies
  const listaDeCarros = ['Fusca', 'Chevete', 'Brasilia', 'Uno', 'Ka', 'Corsa']

  // Função
  const soma = (a, b) => {
    return a + b
  }

  return (
    <div>
      <Cabecalho />
      <Carro
        imgCarro={carro_prof}
        altCarro={altCarro}
        widthCarro={widthCarro}
        legendaCarro={legendaCarro}
        listaDeCarros={listaDeCarros}
        soma={soma}
      />
      <h1>{tag}</h1>
    </div>
  )
}
