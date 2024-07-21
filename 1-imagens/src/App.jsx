
import './App.css'

import Bar from "./assets/bar.jpg"

function App() {


  return (
    <>
      <h1>React JS</h1> <hr />


      <h2>Avançando em React</h2>

      <p>imagens públicas no React</p>

      {/* imagens na pasta public */}

      <div>
        <img src="./saojoao.jpg" alt="" />
      </div>


      <p>Imagens em src</p>
      
      <div>
        <img src={Bar} alt="" />
      </div>

      {/* imagens na pasta assets */}

     


    </>

  )
}

export default App
