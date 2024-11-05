import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ items }) => {
    return (
        <div className="dropdown-container">
            <ul className="dropdown">
                {items.map((category, index) => (
                    <li key={index} className="dropdown-category">
                        <p className="dropdown-category-title">{category.title}</p>
                        <ul>
                            {category.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    <a href="#" className="dropdown-link">{subItem}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Dropdown.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            subItems: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired
};

export default Dropdown;
