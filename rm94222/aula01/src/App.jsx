import React from 'react'
import carro_prof  from './imgs/'
import Lista from './components/Carro'

export default function App() {

  const carro = 'Matheus R'
  const carros =['Fusca','HB20', 'Tucson', 'Peajout']

  const novoCarro =() => 'Ferrari'

  return (
    <>
      <h1>Carros</h1>
      <img src={carro_prof.webp} width='250px'></img>
      <p>Carros: {carro}</p>
      <Lista carros = {carros} maisCarro={novoCarro}/>
    </>
  )
}
