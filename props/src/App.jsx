import './App.css'

import ShowUserName from './components/ShowUserName'

const App = ()=> {
  return(
    <>
      <h1>React Js</h1> <hr />

      <ShowUserName name={"Maria"}/>
      <ShowUserName name={"Pedro"} />
      <ShowUserName name={"Ana"} />
    </>
  )
}

export default  App