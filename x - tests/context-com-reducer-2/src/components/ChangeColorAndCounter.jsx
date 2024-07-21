import { useContext } from "react"

import { ColorAndCounterContext } from "../context/ColorAndCounterContext"

const ChangeColorAndCounter = () => {

    const {state, dispatch} = useContext(ColorAndCounterContext)

  return (
    <div>
        <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type:"CHANGERED"})}>Change title color RED</button>
        <button onClick={() => dispatch({type:"CHANGEGREEN"})}>Change title color GREEN</button>
        <button onClick={() => dispatch({type:"SHOWHIDE"})}>Show/Hide text</button>
    </div>
  )
}

export default ChangeColorAndCounter