import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Assure-toi que le chemin du fichier est correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="header-left">
          <Link to="/" className="logo">
            John Doe Portfolio
          </Link>
        </div>

        {/* Menu burger pour mobile */}
        <div className="header-right">
          <button className="burger-menu" onClick={toggleMenu}>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
          </button>

          {/* Navigation (affiche seulement si le menu est ouvert) */}
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
