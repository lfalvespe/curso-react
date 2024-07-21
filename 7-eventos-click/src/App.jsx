import './App.css'

function App() {

  const handleMyEvent = (e) => {
    console.log("Evento disparado no clique.")

    // Vendo os atributos do evento

    console.log(e)
  }

  return (
    <>
        <h1>React JS</h1> <hr />

        <button onClick={handleMyEvent}>Clique Aqui</button>
    </>
  )
}

export default App
