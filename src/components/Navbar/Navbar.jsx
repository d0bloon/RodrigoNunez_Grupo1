//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//import Slider from "../Sliders/Sliders.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import './navbar.css';

const Navbar = () => {
    // Define tus categorías y sus enlaces
    const ofertaCategories = [
        { name: 'Oferta 1', link: '/oferta1' },
        { name: 'Oferta 2', link: '/oferta2' },
        // Agrega más categorías de ofertas aquí
    ];

    const marcaCategories = [
        { name: 'Marca 1', link: '/marca1' },
        { name: 'Marca 2', link: '/marca2' },
        // Agrega más categorías de marcas aquí
    ];

    const hombreCategories = [
        { name: 'Ropa de hombre', link: '/ropa-hombre' },
        { name: 'Zapatos de hombre', link: '/zapatos-hombre' },
        // Agrega más categorías para hombres aquí
    ];

    const mujerCategories = [
        { name: 'Ropa de mujer', link: '/ropa-mujer' },
        { name: 'Zapatos de mujer', link: '/zapatos-mujer' },
        // Agrega más categorías para mujeres aquí
    ];

    const tendenciasCategories = [
        { name: 'Tendencia 1', link: '/tendencia1' },
        { name: 'Tendencia 2', link: '/tendencia2' },
        // Agrega más categorías de tendencias aquí
    ];

    return (
        <div className="navbar">
            {/* ...otros elementos de la barra de navegación */}
            <Dropdown title="Ofertas" categories={ofertaCategories} />
            <Dropdown title="Marcas" categories={marcaCategories} />
            <Dropdown title="Hombre" categories={hombreCategories} />
            <Dropdown title="Mujer" categories={mujerCategories} />
            <Dropdown title="Nuevas Tendencias" categories={tendenciasCategories} />
        </div>
    );
};

export default Navbar;