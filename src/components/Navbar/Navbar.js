import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="collapse navbar-collapse show" id="navbarSupportedContent">
        <ul className="navbar-nav my-navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn btn-link">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-tasks" className="nav-link">My Tasks</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;