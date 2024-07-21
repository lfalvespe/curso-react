import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {

  const {counter} = useCounterContext()

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <h3>{counter}</h3>
    </div>
  )

}

export default Contact