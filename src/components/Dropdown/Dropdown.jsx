import './Dropdown.css';

const Dropdown = ({ items }) => {
  return (
    <div className="dropdown-container">
      <ul className="dropdown">
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="dropdown-link">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;