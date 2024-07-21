import React, {useState} from 'react'

import ShowMesssage from './components/ShowMesssage'
import ChangeMessageState from './components/ChangeMessageState'

import './App.css'

const App = () => {

  const [message, setMessage] = useState("")


  const handleMessage = (msg)=> {
    setMessage(msg)
  }

  return (
    <>
      <h1>React JS</h1> <hr />

      <ShowMesssage msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

    </>
  )
}

export default App

