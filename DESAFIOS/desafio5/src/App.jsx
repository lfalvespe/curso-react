import {useState} from 'react'

import './App.css'

import CarDetails from './components/CarDetails'

const App = () => {

  const [cars] = useState([
    {model: "Gol", brand: "Volkswagen", year: "2021"},
    {model: "Strada", brand: "Fiat", year: "2023"},
    {model: "City", brand: "Honda", year: "1999"},
  ])

  return (
    <>
      <h1>Challenge Css</h1>

      <div className="container">
        {cars.map((c)=> (
          <CarDetails model={c.model} brand={c.brand} year={c.year}/>
        ))}
      </div>

      
    </>
  )
}

export default App