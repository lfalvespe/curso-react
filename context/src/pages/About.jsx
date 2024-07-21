import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {

  const {counter} = useCounterContext()

  return (
    <div className='about'>
      <h1>About</h1>
      <h3>{counter}</h3>
    </div>
  )
}

export default About