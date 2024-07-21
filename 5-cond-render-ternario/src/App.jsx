import { useState } from 'react'

import './App.css'


import ConditionalRenderTernario from './components/ConditionalRenderTernario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React JS</h1> <hr />

      <ConditionalRenderTernario />
    </>
  )
}

export default App
