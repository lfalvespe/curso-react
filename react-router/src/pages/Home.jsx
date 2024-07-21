import { Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'

import './Home.css'

const url = 'http://localhost:3000/products'

const Home = () => {

  const { data: list, httpConfig, loading, error } = useHttpRequest(url)
  console.log(list)

  return (
    <div className="home">

      <h1>Home</h1>

      <div className="prodContainer">

        {error && <p>{error}</p>}

        <ul className='products'>
          {list && list.map((p) => (
            <li key={p.id}>
              <h2>{p.name.toUpperCase()}</h2>
              <p>R$ {p.price}</p>
              <Link to={`/products/${p.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>

      </div>

    </div>
  )
}

export default Home