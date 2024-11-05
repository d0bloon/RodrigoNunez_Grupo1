import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './item.css'; // Asegúrate de importar tu archivo CSS

export default function Item({ id, brand, name, price, img }) {
    const formatPrice = (price) => {
        return price.toLocaleString('es-CL');
    };

    return (
        <div className="item-container">
            <Link to={`/products/${id}`} className="item-link">
                <img src={img} alt="Imagen Producto"/>
            </Link>
            <div className="item-info">
            <Link to={`/products/${id}`} className="item-link">
                {name}
            </Link>
            <h3 className="item-brand">{brand}</h3>
            <h3 className="item-price">${formatPrice(price)}</h3>
            </div>
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};
