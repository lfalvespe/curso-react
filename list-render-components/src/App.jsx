import { useState } from 'react'
import './App.css'

import CarDetails from './components/CarDetails'

const App = () => {

  const [cars] = useState([
    { id: 1, brand: "VolksWagen", model: "Gol", year: 2021, km: "8908", newCar: false },
    { id: 2, brand: "Fiat", model: "Siena", year: 2018, km: "1524", newCar: false },
    { id: 3, brand: "Ford", model: "Ecosport", year: 2023, km: "0", newCar: true },
    { id: 4, brand: "Renault", model: "Megane", year: 2015, km: "250", newCar: false },
    { id: 5, brand: "Honda", model: "Civic", year: 2000, km: "150253", newCar: false }
  ])

  return (
    <>
      <h1>React Js</h1> <hr />
      <h2>Renderização de listas, Reaproveitamento de componentes, Props</h2> <hr />

      <br />

      {cars.map((c) => (
        <CarDetails 
        key={c.id} 
        brand={c.brand} 
        model={c.model} 
        year={c.year} 
        km={c.km} 
        newCar={c.newCar} 
        />
      ))}


    </>
  )
}

export default App