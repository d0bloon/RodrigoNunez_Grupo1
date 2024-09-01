import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Slider from "../Sliders/Sliders.jsx";
import './header.css';

const Navbar = () => {
    return(
    <div>
        <header className="header">
            <img className="logo" src="/logo.png" alt="logo"/>
            <nav className="navbar">
                <a href="/">Ofertas <FontAwesomeIcon className="icons" icon={faAngleDown}/></a>
                <a href="/">Marcas <FontAwesomeIcon className="icons" icon={faAngleDown}/></a>
                <a href="/">Hombre <FontAwesomeIcon className="icons" icon={faAngleDown}/></a>
                <a href="/">Mujer <FontAwesomeIcon className="icons" icon={faAngleDown}/></a>
                <a href="/">Nuevos Lanzamientos <FontAwesomeIcon className="icons" icon={faAngleDown}/></a>
            </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..."/>
                </div>
                <div className="icon">
                    <a href=""><FontAwesomeIcon className="icons" icon={faMagnifyingGlass}/></a>
                    <a href=""><FontAwesomeIcon className="icons" icon={faUser}/></a>
                    <a href=""><FontAwesomeIcon className="icons" icon={faBagShopping}/></a>
                </div>
            </header>
    </div>
    )
}

export default Navbar