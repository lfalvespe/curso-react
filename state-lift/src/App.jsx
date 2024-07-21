import React, {useState} from 'react'

import './App.css'

import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

const App = () => {

  const [message, setMessage] = useState("")

  const handleMessage = (msg)=> {
    setMessage(msg)
  }

  return (
    <>
      <h1>React Js</h1> <hr />

      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </>
  )
}

export default App

