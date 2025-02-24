import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Première colonne : John Doe */}
        <div className="footer-column">
          <h3>John Doe</h3>
          <p>40 rue Laure Diebold 69009 Lyon France</p>
          <p>10 20 30 40 50</p>
          <p>jonh doe@gmail.com</p>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        {/* Deuxième colonne : Liens utiles */}
        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/legal">Mentions légales</NavLink>
            </li>
          </ul>
        </div>
        
        {/* Troisième colonne : Mes dernières réalisations */}
        <div className="footer-column">
  <h3>Mes dernières réalisations</h3>
  <ul>
    <li>
      <NavLink to="/portfolio#fresh-food">Fresh Food</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio#restaurant-akira">Restaurant Akira</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio#espace-bien-etre">Espace bien-être</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio#seo">SEO</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio#api">Création d'une API</NavLink>
    </li>
    <li>
      <NavLink to="/portfolio#maquette">Maquette d'un site</NavLink>
    </li>
  </ul>
</div>
      </div>
    </footer>
  );
};

export default Footer;
