import './App.css'

import CarDetails from './components/CarDetails'



const App = ()=> {
  return(
    <>
      <h1>React Js</h1> <hr />
      <h2>Props Destructuring</h2><hr /> <br />

      <CarDetails brand={"Volkswagen"} model={"Gol"} year={2021} newCar={true}/>
      <CarDetails brand={"Ford"} model={"Ecosport"} year={2018} newCar={false} />
      <CarDetails brand={"Honda"} model={"Civic"} year={2010} newCar={true} />
    </>
  )
}

export default App