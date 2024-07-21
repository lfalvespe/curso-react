// BrowserRouter
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'

import './App.css'

import reactLogo from './assets/react.svg'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'

//pages
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Info from './pages/Info'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {

  return (

    <div className="App">

      <header><h1> <img src={reactLogo} alt="" />React Router Dom</h1></header>

      <BrowserRouter>

        <Navbar />
        <SearchForm />
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product/:id' element={<Product />}/>
          <Route path='/product/:id/info' element={<Info />} />
          <Route path='/search' element={<Search />}/>
          <Route path='*' element={<NotFound />} />
          <Route path='/company' element={<Navigate to='/about' />}/>

        </Routes>

        <Footer />

      </BrowserRouter>


    </div>

  )
}

export default App
