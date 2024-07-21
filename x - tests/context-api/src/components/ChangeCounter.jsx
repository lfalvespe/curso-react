import useCounterContext from "../hooks/useCounterContext"

const ChangeCounter = () => {

    const {counter, setCounter} = useCounterContext()

  return (
    <button onClick={() => setCounter(counter + 1)}>Incremente Counter</button>
  )
}

export default ChangeCounter