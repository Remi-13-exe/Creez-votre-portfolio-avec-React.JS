import React, { useState } from "react";
// Importation des hooks React, notamment useState pour gérer l'état local
import { Button, Container, Row, Col, ProgressBar } from "react-bootstrap";
// Importation de composants de react-bootstrap pour une mise en page et un style simplifiés

import Header from "../components/Header"; // Composant en-tête
import GithubModal from "../components/Modal"; // Composant pour une modale personnalisée
import "../styles/Home.css"; // Importation du fichier CSS pour les styles spécifiques
import Footer from "../components/Footer"; // Composant pied de page
import johnDoeImage from "../assets/images/john-doe-about.jpg"; // Image utilisée pour la section "À propos"

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  // Création d'un état pour gérer l'affichage de la modale (true ou false)

  const handleShowModal = () => setShowModal(true);
  // Fonction pour afficher la modale

  const handleCloseModal = () => setShowModal(false);
  // Fonction pour cacher la modale

  return (
    <div className="home">
      <Header /> {/* Inclusion de l'en-tête */}

      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-image">
          {/* Texte principal de la page, affichant un titre et une sous-description */}
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web Passionné</h2>
          <Button variant="primary" onClick={handleShowModal}>
            En savoir plus
          </Button>
          {/* Bouton pour ouvrir la modale */}
        </div>
      </section>

      {/* Section Présentation */}
      <section className="about-section">
        <Container>
          <div className="encadre">
            <Row className="about-row">
              {/* Première colonne : Présentation personnelle */}
              <Col xs={12} md={6} className="about-col">
                <h2 className="section-title">À propos de moi</h2>
                <div className="about-image-container">
                  <img src={johnDoeImage} alt="John Doe" className="about-image" />
                  {/* Image de présentation */}
                </div>
                <p>
                  Je suis un développeur web en formation, passionné par la création de sites web
                  modernes et interactifs. J'ai des compétences en HTML, CSS, JavaScript, React et
                  bien plus.
                </p>
              </Col>

              {/* Deuxième colonne : Mes compétences avec des barres de progression */}
              <Col xs={12} md={6} className="about-col">
                <h2 className="section-title">Mes compétences</h2>
                <ul className="skills-list">
                  <li>
                    <strong>HTML5 90%</strong>
                    <ProgressBar now={90} className="progress-html" />
                    {/* Barre de progression pour HTML5 */}
                  </li>
                  <li>
                    <strong>CSS3 80%</strong>
                    <ProgressBar now={80} className="progress-css" />
                  </li>
                  <li>
                    <strong>js 70%</strong>
                    <ProgressBar now={70} className="progress-js" />
                  </li>
                  <li>
                    <strong>PHP 60%</strong>
                    <ProgressBar now={60} className="progress-php" />
                  </li>
                  <li>
                    <strong>React 50%</strong>
                    <ProgressBar now={50} className="progress-react" />
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Composant Modale */}
      <GithubModal show={showModal} onHide={handleCloseModal} />
      {/* Modale s'affiche en fonction de l'état `showModal` */}

      <Footer /> {/* Pied de page */}
    </div>
  );
};

export default Home; // Exportation du composant Home pour être utilisé ailleurs
