import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faUser, } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar/Navbar.jsx";
//import Slider from "../Sliders/Sliders.jsx";
import './header.css';

const Header = () => {
    return(
        <div>
            <header className="header">
                <div className="search-bar">
                        <FontAwesomeIcon  className="search-icon" icon={faMagnifyingGlass}/>
                        <input type="text" placeholder="Buscar..."/>
                </div>  
                <div className="header-container">      
                    <div className="header-content">
                        <img className="logo" src="/logozapstore.png" alt="logo"/>
                    </div>
                </div>        
                <div className="icon">
                    <a href=""><FontAwesomeIcon className="icon-user" icon={faUser}/></a>
                    <a href=""><FontAwesomeIcon className="icon-bag" icon={faBagShopping}/></a>
                </div>
            </header>
        </div>
    )
}

export default Header