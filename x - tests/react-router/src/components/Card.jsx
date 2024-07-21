import { Link } from 'react-router-dom'

import './Card.css'

const Card = ({name, id, price}) => {

    return (

        <div className="card">
            <div className="title">{name}</div>
            <div className="img">
                <Link to={`/product/${id}`}><img src={`products/${id}.png`} alt="" /></Link>

            </div>
            <div className="price">R$ {price}</div>
        </div>

    )
}

export default Card