import useCounterContext from '../hooks/useCounterContext'

import ChangeCounter from '../components/ChangeCounter'

const Home = () => {

  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Home</h1>
      <h3>contador: {counter}</h3>
      <ChangeCounter />

    </div>

  )
}

export default Home