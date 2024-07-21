import { useParams } from "react-router-dom"

import { useHttpRequest } from "../hooks/useHttpRequest"

const Product = () => {

    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}`
    const { data: product } = useHttpRequest(url)
    console.log(product)

    return (
        <div className="product">

            <div className="title"><h1>Product</h1></div>
            {
                product && (
                <p>{product.name} - R${product.price}</p>
                )
            }
        </div>


    )
}

export default Product