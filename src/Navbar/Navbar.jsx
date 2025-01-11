import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <span className="quiz">Cyber</span>
          <span className="grad">Shield</span>
        </h1>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className="link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/quiz" className="link" activeClassName="active">
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink to="/feed" className="link" activeClassName="active">
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/forum" className="link" activeClassName="active">
            Forum
          </NavLink>
        </li>
      </ul>
      <button className="login-btn">
        <NavLink to="/auth/login" className="link">
          Login
        </NavLink>
      </button>
    </nav>
  );
}

export default Navbar;
