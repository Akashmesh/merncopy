import { NavLink } from "react-router-dom";
import "../componets/Navbar.css"; // keep as is for now

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          Akash
        </NavLink>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="nav-link">
                Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};