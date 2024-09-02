import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar/Navbar.jsx";
//import Slider from "../Sliders/Sliders.jsx";
import './header.css';

const Header = () => {
    return(
        <div>
            <header className="header">
                <img className="logo" src="/logo.png" alt="logo"/>
                <div>
                    <Navbar/>
                </div>
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

export default Header