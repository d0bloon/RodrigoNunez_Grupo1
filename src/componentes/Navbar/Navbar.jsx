import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Slider from "../Sliders/Sliders.jsx";

const Navbar = () => {
    return(
    <div>
        <Slider/>
        <header className="header">
            <img className="logo" src="/logo.png" alt="logo"/>
            <nav className="navbar">
                <a href="/">Inicio</a>
                <a href="/">Acerca de</a>
                <a href="/">Descubre</a>
                <a href="/">Servicios</a>
                <a href="/">Contacto</a>
            </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..."/>
                    <FontAwesomeIcon className="icons" icon={faMagnifyingGlass}/>
                    <FontAwesomeIcon className="icons" icon={faUser}/>
                    <FontAwesomeIcon className="icons" icon={faCartShopping}/>
                </div>
            </header>
    </div>
    )
}

export default Navbar