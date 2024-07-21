import React from 'react'
import './App.css'

import Container from './components/Container'

const App = () => {
  return (
    <>
      <h1>React Js</h1>
      <h2>Propriedade Children</h2>
      <p>
        Inserindo conteúdo personalizado dentro do componente a cada reutilização
      </p>

      <br />

      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti expedita architecto distinctio! Suscipit tenetur dolore dolorum, non vel repellendus beatae esse error sequi voluptatum! Id accusamus ipsam eum veniam unde!
        </p>
      </Container>

      <Container>
        <img src="vite.svg" alt="" />
      </Container>



    </>
  )
}

export default App

