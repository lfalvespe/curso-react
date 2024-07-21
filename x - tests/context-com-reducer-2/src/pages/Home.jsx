import {useColorAndCounterContext} from '../hooks/useColorAndCounterContext'

import ChangeColorAndCounter from '../components/ChangeColorAndCounter'

const Home = () => {


  const {state} = useColorAndCounterContext()

  const color = state.titleColor
  const isShow = state.isShow
  const counter = state.counter

 
  return (
    <div>
      <h2 style={{color:color}}>Home</h2>
      <h3>Contador: {counter}</h3>

      {isShow && <h4>Texto renderizado de forma condicional</h4>}

      <hr />

      <ChangeColorAndCounter />

    </div>
  )
}

export default Home