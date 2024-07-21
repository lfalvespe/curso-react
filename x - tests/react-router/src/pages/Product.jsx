import './Product.css'

import { useParams, Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'

const Product = () => {

    const { id } = useParams()

    const url = 'http://localhost:3000/products/' + id


    const { data: product } = useFetch(url)

    return (
        <div className='product'>

            <div className="title">
                <h1>Página do produto</h1>
            </div>

            <div className="productDetails">
                <h2>Cód. do Produto: {id}</h2>
                {product && (
                    <>
                        <div><img src={`/products/${id}.png`} alt="" /></div>
                        <div className="title"></div>
                        <h3>{product.name.toUpperCase()}</h3>
                        <p>R$ {product.price}</p>
                        <Link to={`/product/${id}/info`}>mais detalhes</Link>
                        <div><button>Comprar</button></div>
                    </>
                )}
            </div>
            
        </div>
    )
}

export default Product