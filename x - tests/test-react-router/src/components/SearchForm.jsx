import { useState, useRef } from "react"

import { useNavigate } from "react-router-dom"

const SearchForm = () => {

    const [query, setQuery] = useState('')

    const inputRef = useRef()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search?q=' + query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} onChange={(e) => setQuery(e.target.value)} value={query} />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm









