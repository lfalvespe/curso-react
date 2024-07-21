import { useState, useRef } from "react"

import './App.css'

import reactLogo from './assets/react.svg'

import { useHttpRequest } from "./hooks/useHttpRequest"

const url = 'http://localhost:3000/products'

const App = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const inputNameRef = useRef()
  const inputPriceRef = useRef()


  // get products
  const { data: list, httpConfig, loading, error } = useHttpRequest(url)


  // post products
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

  // delete products
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (

    <div className="App">

      <div className="header">
        <h1><img src={reactLogo} alt="" height="48" /> HTTP Requests in React</h1>
      </div>

      <div className="formContainer">

        <h3>Cadastrar Produto</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span> Nome </span>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              ref={inputNameRef}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            <span> Preço </span>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              ref={inputPriceRef}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>

          {!loading && <input
            id="btnRegister"
            type="submit"
            value="Cadastrar"
          />
          }

          {loading && <input
            id="btnRegister"
            type="submit"
            value="Aguarde"
            disabled
          />
          }

        </form>
      </div>


      <div className="prodContainer">
        <h2>Lista de Produtos</h2>

        {loading && <div className="loading"></div>}
        
        {error && <p>Algo deu errado: {error.message} </p>}

        {!loading && (
          <ul>

            {list && list.map((p) => (
              <li key={p.id}>
                <span className="pName" width="100">
                  {p.name.toLowerCase()}
                </span>
                <span className="pPrice" width="100">
                  R$ {p.price}
                </span>
                <span className="btnDeleteContainer" width="100"><button id="btnDelete" onClick={() => handleRemove(p.id)}>Delete</button></span>
              </li>
            ))}

          </ul>
        )}

      </div>

      <div className="footer">
        <div className="footerLogo">
          <img src={reactLogo} alt="" height="30" /> <strong style={{ fontSize: "20px", color: "lightblue" }}> + </strong> <img src="vite.svg" alt="" height="30" />
        </div>
        <div className="footerTitle">
          <h3>Estudos React JS</h3>
        </div>
        <div className="contact">
          <a href="mailto:lfalvespe@gmail.com" target="_blank"><img src="gmail.svg" alt="" height="28" style={{ marginRight: "5px" }} /></a>
          <a href="https://github.com/lfalvespe"><img src="github.svg" alt="" height="28" /></a>
        </div>
      </div>

    </div>

  )
}

export default App