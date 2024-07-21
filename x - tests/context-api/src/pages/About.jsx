import useCounterContext from "../hooks/useCounterContext"

const About = () => {

  const { counter } = useCounterContext()

  return (
    <div>
      <h1>About</h1>
      <h3>contador: {counter}</h3>
    </div>
  )
}

export default About