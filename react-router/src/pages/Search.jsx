import { useSearchParams, Link } from 'react-router-dom'
import { useHttpRequest } from '../hooks/useHttpRequest'


import './Home.css'



const Search = () => {

  const [searchParams] = useSearchParams()
  

  const url = 'http://localhost:3000/products?' + searchParams;


  const { data: list, loading, error } = useHttpRequest(url)
  console.log(list)

  return (

    <div className="search">

      <h1>Resultados obtidos</h1>

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

  )
}

export default Search