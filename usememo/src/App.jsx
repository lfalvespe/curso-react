import { useState, useEffect, useMemo } from 'react'

import './App.css'


const App = () => {

  const [number, setNumber] = useState(0)

  // const premiumNumbers = ["0", "100", "200"]

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"]
  }, [])

  useEffect(() => {
    console.log("Premium numbers foi alterado!")
  }, [premiumNumbers])

  return (
    <>
      <h1>React Hooks</h1><hr />
      <h2>useMemo</h2>

      <input type="text" onChange={(e) => setNumber(e.target.value)} />

      {premiumNumbers.includes(number) ?
        <p>Acertou o número</p> :
        <p>{""}</p>
      }
    </>
  )
}

export default App