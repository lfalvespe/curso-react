import React, { useState } from 'react'

const ChangeMessageState = ({handleMessage}) => {

    

    const [messages] = useState([
        "Olá!",
        "Oi!!!",
        "E aí, tudo bem?"
    ])
    
  return (
    <>
        <button onClick={()=> handleMessage(messages[0])}>1</button>
        <button onClick={()=> handleMessage(messages[1])}>2</button>
        <button onClick={()=>handleMessage(messages[2])}>3</button>
    </>
  )
}

export default ChangeMessageState