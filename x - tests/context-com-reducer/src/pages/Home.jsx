import {useTitleColorContext} from '../hooks/useTitleColorContext'

const Home = () => {

  const {color, dispatch} = useTitleColorContext()


  const setTitleColor = (color) => {
    dispatch({type:color})
  }

  return (
    <div>
        <h1 style={{color}}>Home</h1>

        <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
        <button onClick={()=> setTitleColor("BLUE")}>Azul</button>
    </div>
  )
}

export default Home