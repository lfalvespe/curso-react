import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/Contact'>Contact</NavLink>
   </nav>
  )
}

export default Navbar