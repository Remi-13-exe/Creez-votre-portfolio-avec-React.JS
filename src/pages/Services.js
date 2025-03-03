import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Import du composant Card
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faCode, faSearch } from "@fortawesome/free-solid-svg-icons"; // Import des icônes nécessaires
import banner from "../assets/images/banner.jpg";
import "../styles/services.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="services">
      <Header />
      {/* Bannière avec le titre en dessous */}
      <div className="banner">
        <img src={banner} alt="Bannière" className="banner-image" />
        <h1 className="banner-title">Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="banner-bar"></div> {/* Ajout de la barre */}
      </div>
      {/* Section des services */}
      <Container className="services-container">
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="d-flex">
            <Card className="service-card flex-fill">
              <Card.Body>
                <FontAwesomeIcon icon={faPaintBrush} className="service-icon" />
                <Card.Title className="service-title">UX Design</Card.Title>
                <Card.Text>
                  L'UX Design est une discipline qui consiste à concevoir des produits (site web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="d-flex">
            <Card className="service-card flex-fill">
              <Card.Body>
                <FontAwesomeIcon icon={faCode} className="service-icon" />
                <Card.Title className="service-title">Développement Web</Card.Title>
                <Card.Text>
                  Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="d-flex">
            <Card className="service-card flex-fill">
              <Card.Body>
                <FontAwesomeIcon icon={faSearch} className="service-icon" />
                <Card.Title className="service-title">Référencement</Card.Title>
                <Card.Text>
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
