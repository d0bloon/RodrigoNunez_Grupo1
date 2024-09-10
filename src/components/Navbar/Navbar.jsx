//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//import Slider from "../Sliders/Sliders.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="#" className="nav-link">Ofertas</a>
                    <Dropdown items={['Item 1', 'Item 2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Sneakers</a>
                    <Dropdown items={['Item 1', 'Item 2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Hombre</a>
                    <Dropdown items={['Item 1', 'Item 2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Mujer</a>
                    <Dropdown items={['Item 1', 'Item 2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Nuevos Lanzamientos</a>
                    <Dropdown items={['Item 1', 'Item 2']} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;