import { useState, useEffect, useLayoutEffect } from 'react'

import './App.css'

const App = () => {

  const [name, setName] = useState("Algum nome")


  useEffect(() => {
    console.log("2")
    setName("Mudou de novo")
  }, [])

  useLayoutEffect(() => {
    console.log("1")
    setName("Outro nome")
  }, [])


  console.log(name)

  // A partir da versão 17 do React o comportamento do useLayoutEffect foi alterado. Desta forma, é impresso também o "Outro nome" no console.

  return (
    <>

      <h1>React Hooks</h1><hr />
      <h2>useLayoutEffect</h2>

      <p>Nome: {name}</p>

    </>
  )
}

export default App