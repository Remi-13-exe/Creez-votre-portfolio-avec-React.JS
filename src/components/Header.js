import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Utilisation de NavLink pour gérer l'état actif
import '../styles/header.css'; // Assure-toi que le chemin du fichier CSS est correct

const Header = () => {
  // État pour gérer l'ouverture et la fermeture du menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        {/* Partie gauche : Logo */}
        <div className="header-left">
          {/* NavLink pour le logo ; il redirige vers la page d'accueil */}
          <NavLink to="/" className="logo">
            John Doe Portfolio
          </NavLink>
        </div>

        {/* Partie droite : Menu burger et navigation */}
        <div className="header-right">
          {/* Bouton burger affiché sur mobile */}
          <button className="burger-menu" onClick={toggleMenu}>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
            <span className="burger-icon"></span>
          </button>

          {/* Navigation principale */}
          {/* La classe "open" est ajoutée dynamiquement si le menu est ouvert */}
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {/* Chaque NavLink va recevoir la classe "active" automatiquement si la route correspond */}
              <li>
                <NavLink
                  to="/" 
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services" 
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio" 
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact" 
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/legal" 
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
