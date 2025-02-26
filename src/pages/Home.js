import React, { useState } from 'react';
import { Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Importation du Header
import Modal from '../components/Modal'; // Assure-toi que ce composant existe
import '../styles/Home.css'; // Chemin vers le fichier CSS personnalisé
import Footer from '../components/Footer';
import johnDoeImage from '../assets/images/john-doe-about.jpg';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  // Fonction pour afficher/fermer la modale
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="home">
      {/* Header ajouté ici */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web Passionné</h2>
          <Button variant="primary" onClick={handleShowModal}>
            En savoir plus
          </Button>
        </div>
      </section>

      {/* Présentation */}
      <section className="about-section">
        <Container>
          <Row>
            {/* Colonne gauche : À propos de moi */}
            <Col xs={12} md={6}>
              <h2 className="section-title">À propos de moi</h2>
              <div className="about-image-container">
                <img src={johnDoeImage} alt="John Doe" className="about-image" />
              </div>
              <p>
                Je suis un développeur web en formation, passionné par la création de sites web
                modernes et interactifs. J'ai des compétences en HTML, CSS, JavaScript, React et
                bien plus.
              </p>
            </Col>

            {/* Colonne droite : Mes compétences */}
            <Col xs={12} md={6}>
              <h2 className="section-title">Mes compétences</h2>
              <ul className="skills-list">
                <li>
                  <strong>HTML5</strong>
                  <ProgressBar now={90} className="progress-html" />
                </li>
                <li>
                  <strong>CSS3</strong>
                  <ProgressBar now={80} className="progress-css" />
                </li>
                <li>
                  <strong>JavaScript</strong>
                  <ProgressBar now={70} className="progress-js" />
                </li>
                <li>
                  <strong>PHP</strong>
                  <ProgressBar now={60} className="progress-php" />
                </li>
                <li>
                  <strong>React</strong>
                  <ProgressBar now={50} className="progress-react" />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modale */}
      <Modal show={showModal} onHide={handleCloseModal} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
