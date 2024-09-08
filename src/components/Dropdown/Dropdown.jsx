import './Dropdown.css';

const Dropdown = ({ items }) => {
    return (
        <ul className="dropdown">
            {items.map((item, index) => (
                <li key={index}>
                    <a href="#" className="dropdown-link">{item}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;