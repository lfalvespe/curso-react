import { useDebugValue, useState } from 'react'

import './App.css'

import { usePreviousValue } from './hooks/usePreviousValue'

const App = () => {

  const [number, setNumber] = useState(0)
  const previousValue = usePreviousValue(number)




  return(
    <>
      <h1>React Hooks</h1>
      <h2>useDebugValue</h2> <hr />
      <p>Número sorteado: {number}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 101))}>Sortear um número</button>
      <hr />
      <p>Número anterior: {previousValue}</p>
     
    </>
  )
}

export default App
