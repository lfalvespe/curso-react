import useCounterContext from "../hooks/useCounterContext"

const Contact = () => {

  const {counter} = useCounterContext()

  return (
    <div>
      <h1>Contact</h1>
      <h3>contador: {counter}</h3>
    </div>
  )
}

export default Contact