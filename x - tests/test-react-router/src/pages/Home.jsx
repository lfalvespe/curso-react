import { Link } from 'react-router-dom'

import { useHttpRequest } from '../hooks/useHttpRequest'

import './Home.css'

const url = 'http://localhost:3000/products'

const Home = () => {

    const { data: list } = useHttpRequest(url)

    return (
        <div className='home'>
            <div className="title">
                <h2>Home</h2>
                <div className="list">
                    <ul>
                        {list && list.map((p) => (
                            <li key={p.id}>
                                <h3>{p.name} R$ {p.price}</h3>
                                <Link to={`/product/${p.id}`} >Mais detalhes</Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home