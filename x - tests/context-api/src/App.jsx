import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App