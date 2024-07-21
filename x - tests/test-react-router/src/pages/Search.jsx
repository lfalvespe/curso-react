import React from 'react'

import { useSearchParams, Link } from 'react-router-dom'

import {useHttpRequest} from '../hooks/useHttpRequest'

const Search = () => {

const [searchParams] = useSearchParams()

const url = 'http://localhost:3000/products?' + searchParams

const { data: list } = useHttpRequest(url)
console.log(list)

  return (
    <div className='search'>
      <div className="title"><h2>Search</h2></div>
      <div className="list">
        <ul>
          {list && list.map((p) => (
            <li key={p.id}>
              <h3>{p.name} - R$ {p.price}</h3>               
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Search