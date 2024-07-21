import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'

import './App.css'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>about</NavLink>
          </nav>
        </header>

        <h1>React Hooks</h1><hr />
        <h2>useEffect cleanup</h2>
   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

     
    </div>
  )
}

export default App