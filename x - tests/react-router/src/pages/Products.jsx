import './Products.css'

import { useFetch } from '../hooks/useFetch'

import Card from '../components/Card'

const url = 'http://localhost:3000/products'

const Products = () => {

  const { data: list } = useFetch(url)
  console.log(list)

  return (
    <div className="products">
      <div className="title">
        <h1>Products</h1>
      </div>
      <div className="list">
        <ul>
          {list && list.map((p) => (

            <li key={p.id}>
              <Card name={p.name} id={p.id} price={p.price}/>
            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default Products