import React from 'react'

import './App.css'

import PropsFunction from './components/PropsFunction'

const App = () => {

  const myfunction = ()=> {
    console.log("Ativou a ação")
  }

  return (
    <>
      <h1>React JS</h1> <hr />

      <PropsFunction myFunction={myfunction} />
      
    </>
  )
}

export default App