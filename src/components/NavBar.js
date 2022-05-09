import { Link , NavLink  } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="nav"> 
          <ul>
            <li><Link to="/productos/Productos" className="nav__link"> Productos </Link></li>
            <li><NavLink to="/productos/Galeria" className="nav__link"> Galeria de Imágenes </NavLink></li>
            <li><NavLink to="/productos/Contacto" className="nav__link"> Contacto </NavLink></li>
            </ul>
        </nav>   
  )
}

export default NavBar