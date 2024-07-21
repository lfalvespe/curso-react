import React, {useState} from 'react'

import './App.css'

import UserDetails from './components/UserDetails'

const App = () => {

  const [pessoas, setPessoas] = useState([
    {id:1, name: "Maria", age: 18, occupation: "Professora" },
    {id:2, name: "José", age: 33, occupation: "Engenheiro" },
    {id:3, name: "Pedro", age: 16, occupation: "Estudante" },
    {id:4, name: "Ana", age: 22, occupation: "Escritora" },
    {id:5, name: "Beatriz", age: 15, occupation: "Estudante" }
  ])

  return (
    <>
      <h1>React JS</h1> <hr />
      <h2>Desafio 4</h2> <br />

      {pessoas.map((p)=> (
        <UserDetails key={p.id} name={p.name} age={p.age} occupation={p.occupation}/>
      ))}
    </>
  )
}

export default App


