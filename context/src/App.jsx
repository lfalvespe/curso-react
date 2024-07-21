import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>Context Api</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </div>

  )
}

export default App