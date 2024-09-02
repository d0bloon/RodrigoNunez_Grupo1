import './Dropdown.css';
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Dropdown = ({ title, categories }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <div className="dropdown-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="dropdown-trigger">{title}</span>
            {showDropdown && (
                <ul className="dropdown">
                    {categories.map((category, index) => (
                        <li key={index}><a href={category.link}>{category.name}</a></li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;