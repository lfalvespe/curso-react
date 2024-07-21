import { useState, useRef } from 'react'

import './App.css'

import { useHttpRequest } from './hooks/useHttpRequest'


const url = 'http://localhost:3000/products'

const App = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const inputNameRef = useRef()
  const inputPriceRef = useRef()

  // get products
  const { data: list,httpConfig } = useHttpRequest(url)

  // post product
  const handleSubmit = (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    httpConfig(product, "POST")

    // clear states and focus
    setName('')
    setPrice('')
    inputNameRef.current.focus()

  }

  // delete product
  const handleDelete = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <div className="header">
        <h1><img src="react.svg" alt="" /> HTTP Requests em REACT JS</h1> 
      </div>

      <div className="prodContainer">
        <h2>Lista de produtos</h2>
        <ul>
          { list && list.map((p) => (
            <li key={p.id}>{p.name.toLowerCase()} - R${p.price} - <button id='btnDelete' onClick={() => handleDelete(p.id)}>Delete</button></li>
          ))}
        </ul>
      </div>

      <div className="formContainer">
        <h3>Cadastrar Novo Produto</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              id='name'
              name='name'
              value={name}
              ref={inputNameRef}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              id='price'
              name='price'
              value={price}
              ref={inputPriceRef}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
      
      {/* FOOTER */}
      <div className="footer">
        <img src="react.svg" alt="" /> <strong>+</strong> <img src="vite.svg" alt="" />

        <h3>Estudos React JS</h3>
        <p>Fernando Alves</p>
        <p>lfalvespe@gmail.com</p>
      </div>

    </div>
  )
}


export default App