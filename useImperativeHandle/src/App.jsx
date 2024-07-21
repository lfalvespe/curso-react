import { useRef } from 'react'

import './App.css'

import SomeComponent from './components/SomeComponent'

const App = () => {

  const inputRef = useRef()

  return (

    <div>
      <h1>React Hooks</h1><hr />
      <h2>useImperativeHandle</h2>

      <SomeComponent ref={inputRef} />
      <button onClick={() => inputRef.current.validate()}>Validate</button>

    </div>

  )
}

export default App