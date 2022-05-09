import NavBar from "./NavBar.js"
import Nav from "./CartWidget.js"
import { Link  } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
        <Link to="/">
        <h1 className="header__titulo"> Tu inversión online </h1>
        </Link>
        <Nav/>
        <NavBar/>
        </header>
    )
}

export default Header