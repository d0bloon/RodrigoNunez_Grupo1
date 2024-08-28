import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Slider from "../Sliders/Sliders.jsx";
import './header.css';

const Navbar = () => {
    return(
    <div>
        <header className="header">
            <img className="logo" src="/logo.png" alt="logo"/>
            <nav className="navbar">
                <a href="/">Ofertas</a>
                <a href="/">Marcas</a>
                <a href="/">Hombre</a>
                <a href="/">Mujer</a>
                <a href="/">Nuevos Lanzamientos</a>
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