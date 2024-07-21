import './SearchForm.css'

import { useState, useRef } from 'react'

import { useNavigate } from 'react-router-dom'

const SearchForm = () => {

  const navigate = useNavigate()

  const [query, setQuery] = useState()

  const inputRef = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    navigate('/search?q=' + query)
    setQuery('')
    inputRef.current.focus()
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} onChange={(e) => setQuery(e.target.value)} value={query}/>
        <input id='btnSearch' type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm