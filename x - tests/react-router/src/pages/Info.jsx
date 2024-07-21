import { useParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

import './Info.css'

const Info = () => {

    const {id}  = useParams()

    const url = 'http://localhost:3000/products/' + id

    const {data: product} = useFetch(url)

  return (
    <div className="info">
        <h3>Informações do poduto de id: {id}</h3>
        {product && (
            <p>{product.details}</p>
        )}

    </div>
  )
}

export default Info