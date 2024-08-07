import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'

import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import Search from './pages/Search'
import Product from './pages/Product'


const App = () => {
  return (
    <div className="App">
      <h1>React Router</h1><hr />


      <BrowserRouter>
        <NavBar />
        <SearchForm />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/search' element={<Search />}/>
          <Route path='/product/:id' element={<Product />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='company' element={<Navigate to='/about'/>} />
    
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default App