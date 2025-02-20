import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo à gauche */}
        <div className="header-left">
          <span className="logo">JOHN DOE</span>
        </div>

        {/* Navigation à droite */}
        <div className="header-right">
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/legal" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
