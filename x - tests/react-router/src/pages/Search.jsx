import { useSearchParams } from "react-router-dom"

import {useFetch} from '../hooks/useFetch'

import Card from '../components/Card'

import './Search.css'

const Search = () => {

  const [searchParams] = useSearchParams()

  const url = 'http://localhost:3000/products?' + searchParams
  
  const {data: list} = useFetch(url)

  console.log(list)
  return (

    <div className="search">
      <div className="title"><h1>Search</h1></div>
      <ul>
        {list && list.map((p) => (
          <li><Card id={p.id} name={p.name}/></li>
        )
        
        )}
      </ul>
    </div>
  )
}

export default Search