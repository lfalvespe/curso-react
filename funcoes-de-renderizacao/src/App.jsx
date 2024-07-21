
import './App.css'


const App = () => {
  
  const renderSomething = (x) => {
    if (x){
      return(
        <h3>Conteúdo renderizado se o valor de x é "TRUE""</h3>
      )
    
    }

    else {
      return(
        <h3>Conteúdo renderizado se o valor de x é "FALSE"</h3>
      )
    }
  }

  return(
    <>
      <h1>React JS</h1> <hr />

      {renderSomething(true)}

      <hr />

      {renderSomething(false)}

      <hr />

    </>
  )
}

export default App
