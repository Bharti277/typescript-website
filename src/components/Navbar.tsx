import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TodoApp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/?todos=active">Active</Link>
        </li>
        <li>
          <Link to="/?todos=completed">Completed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
