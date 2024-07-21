import { useCounterContext } from '../hooks/useCounterContext'

import ChangeCounter from '../components/ChangeCounter'

const Home = () => {

    const {counter} = useCounterContext()

    return (
        <div className="home">
            <h1>Home</h1>

            <h3>Contador: {counter}</h3>

            <ChangeCounter />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur odio id, maiores perspiciatis vel nemo, dicta cupiditate numquam eligendi velit. Iusto ipsam quas nulla, harum praesentium tempore odio esse.
            </p>
        </div>
    )
}

export default Home