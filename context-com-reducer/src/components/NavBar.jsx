import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
    )
}

export default NavBar