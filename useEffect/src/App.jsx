import { useState, useEffect } from 'react'

import './App.css'


const App = () => {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)


  // no dependence array
  useEffect(() => {
    console.log("Executo por qualquer alteração")
  })

  // empty dependence array
  useEffect(() => {
    console.log("Executo apenas no início")
  }, [])

  // depending on value1
  useEffect(() => {
    console.log("Executo se alterado value1")
  }, [value1])

  // depending on value1 or value2
  useEffect(() => {
    console.log("Executo se alterado value1 ou value2")
  })



  return (
    <>

      <h1>React Hooks</h1> <hr />
      <h2>useEffect</h2>

      <button onClick={() => setValue1(old=> old + 1)}>Alterar value 1</button> <br /><br />
      <button onClick={() => setValue2(old=> old + 1)}>Alterar value 2</button> 


    </>
  )

}

export default  App