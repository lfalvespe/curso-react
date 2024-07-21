import { useState, useRef, useEffect } from 'react'

import './App.css'

const url = 'http://localhost:3000/Products'

const App = () => {

  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const inputNameRef = useRef()
  const inputPriceRef = useRef()

  // 1 - Resgatando dados

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData()

  }, [])

  // 2 - add products

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })

    // 3 - Carregamento dinâmico
    const addedProduct = await res.json()
    setProducts((old) => [...old, addedProduct])

    // clear states
    setName('')
    setPrice('')

    //focus
    inputNameRef.current.focus()

  }

  return (
    <>
      <h1>Requisições HTTP no React</h1><hr />

      <h2>Lista de produtos</h2>
      <div className="prod-container">
        <ul>
          {products.map((p) => (
            <li key={p.id}><strong>{p.name.toUpperCase()}</strong> - R$ {p.price}</li>
          ))}
        </ul>
      </div>
      <hr />
      <h2>Cadastrar produtos</h2>
      <div className="add-product">

        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name='name'
              id='name'
              value={name}
              ref={inputNameRef}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              name='price'
              id='price'
              value={price}
              ref={inputPriceRef}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="criar" />
        </form>
      </div>


    </>
  )
}

export default App
