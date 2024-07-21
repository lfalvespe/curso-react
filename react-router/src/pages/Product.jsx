import { useParams, Link } from "react-router-dom"

import { useHttpRequest } from "../hooks/useHttpRequest"

const Product = () => {

  const { id } = useParams()


  const url = "http://localhost:3000/products/" + id


  const { data: product, loading, error } = useHttpRequest(url)

  console.log(product)

  return (

    <div className="product">

      <h1>Product</h1>
      <p>ID do produto: {id}</p>

      {error && <p>{error}</p>}
      {product && (
        <div className="details">
          <h2>{product.name.toUpperCase()}</h2>
          <p>R$: {product.price}</p>
          <Link to={`/products/${id}/info`}>Mais informações</Link>

        </div>
      )}

    </div>

  )
}

export default Product