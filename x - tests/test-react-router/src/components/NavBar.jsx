import { NavLink } from "react-router-dom"

import './NavBar.css'

const Navbar = () => {
  return (
    <nav>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>

    </nav>
  )
}

export default Navbar