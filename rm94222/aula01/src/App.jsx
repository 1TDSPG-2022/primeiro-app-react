import React from 'react'
import './App.css'
import carro_prof  from './imgs/carro_prof.webp'
import Lista from './components/Carro'
import Cabecalho from './components/Cabecalho'
import Parceiro from './components/Parceiro'

export default function App() {

  const carro = ''
  const carros =['Fusca','HB20', 'Tucson', 'Peajout']

  const novoCarro =() => 'Ferrari'

  return (
    <>
      <Cabecalho></Cabecalho>
      <h1>Carros</h1>
      <img src={carro_prof} width='250px'></img>
      <p>Carros: {carro}</p>
      <Lista carros = {carros} maisCarro={novoCarro}/>
      <Parceiro></Parceiro>
    </>
  )
}
