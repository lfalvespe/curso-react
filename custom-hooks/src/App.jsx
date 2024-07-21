import { useState } from 'react'

import './App.css'

import { usePrevious } from './hooks/usePrevious'

const App = () => {

  const [number, setNumber] = useState(0)

  const previousValue = usePrevious(number)

  return (
    <div>
      <h1>React Hooks</h1><hr />
      <h2>Custom Hooks</h2>
      <p>Valor Atual: {number}</p>
      <p>Valor anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100))}>Alterar</button>
    </div>
  )
}

export default App