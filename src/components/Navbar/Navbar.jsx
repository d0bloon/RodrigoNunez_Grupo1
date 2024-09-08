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
                    <a href="#" className="nav-link">Category 1</a>
                    <Dropdown items={['Subcategory 1.1', 'Subcategory 1.2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Category 2</a>
                    <Dropdown items={['Subcategory 2.1', 'Subcategory 2.2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Category 3</a>
                    <Dropdown items={['Subcategory 3.1', 'Subcategory 3.2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Category 4</a>
                    <Dropdown items={['Subcategory 4.1', 'Subcategory 4.2']} />
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Category 5</a>
                    <Dropdown items={['Subcategory 5.1', 'Subcategory 5.2']} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;