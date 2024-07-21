import './App.css'

const App = () => {
  return(
    <>
      <h1>React Js</h1> <hr />

      <button onClick={()=> console.log("Evento disparado")}>Clique Aqui</button>


      <button onClick={()=> {
        if(true) {
          console.log("Isto é uma má prática!")
        }

        // Funções de blocos dentro do evento. Má prática, polui o HTML!

      }}>Clique Aqui</button>



    </>
  )
}

export default App
