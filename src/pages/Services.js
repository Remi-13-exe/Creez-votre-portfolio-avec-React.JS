import React from "react";
// Importation de React pour créer le composant

import { Container, Row, Col, Card } from "react-bootstrap";
// Importation des composants Bootstrap pour la mise en page et le style

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importation de FontAwesome pour utiliser des icônes personnalisées

import { faPaintBrush, faCode, faSearch } from "@fortawesome/free-solid-svg-icons";
// Importation des icônes spécifiques nécessaires à la page

import banner from "../assets/images/banner.jpg";
// Importation de l'image de la bannière

import "../styles/services.css";
// Importation du fichier de style CSS spécifique à la page "Services"

import Header from "../components/Header";
// Importation du composant de l'en-tête

import Footer from "../components/Footer";
// Importation du composant du pied de page

const Services = () => {
  return (
    <div className="services">
      <Header /> {/* Inclusion de l'en-tête */}
      
      {/* ====== Section de la bannière ====== */}
      <div className="banner">
        <img src={banner} alt="Bannière" className="banner-image" />
        {/* Image de la bannière */}
        <h1 className="banner-title">Mon offre de services</h1>
        {/* Titre principal de la bannière */}
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        {/* Texte descriptif sous le titre */}
        <div className="banner-bar"></div> 
        {/* Barre visuelle sous le texte */}
      </div>

      {/* ====== Section des services ====== */}
      <Container className="services-container">
        <Row className="justify-content-center">
          {/* Carte pour le service UX Design */}
          <Col xs={12} md={4} className="d-flex">
            <Card className="service-card flex-fill">
              <Card.Body>
                <FontAwesomeIcon icon={faPaintBrush} className="service-icon" />
                {/* Icône de peinture pour l'UX Design */}
                <Card.Title className="service-title">UX Design</Card.Title>
                {/* Titre du service */}
                <Card.Text>
                  L'UX Design est une discipline qui consiste à concevoir des produits
                  (site web, applications mobiles, logiciels, objets connectés, etc.)
                  en plaçant l'utilisateur au centre des préoccupations. L'objectif est
                  de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </Card.Text>
                {/* Description du service */}
              </Card.Body>
            </Card>
          </Col>

          {/* Carte pour le service Développement Web */}
          <Col xs={12} md={4} className="d-flex">
            <Card className="service-card flex-fill">
              <Card.Body>
                <FontAwesomeIcon icon={faCode} className="service-icon" />
                {/* Icône de code pour le Développement Web */}
                <Card.Title className="service-title">Développement Web</Card.Title>
                {/* Titre du service */}
                <Card.Text>
                  Le développement de sites web consiste à créer des sites internet en
                  utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.)
                  et des frameworks (Bootstrap, React, Angular, etc.).
                </Card.Text>
                {/* Description du service */}
              </Card.Body>
            </Card>
          </Col>

          {/* Carte pour le service Référencement */}
          <Col xs={12} md={4} className="d-flex">
            <Card className="service-card flex-fill">
              <Card.Body>
                <FontAwesomeIcon icon={faSearch} className="service-icon" />
                {/* Icône de loupe pour le Référencement */}
                <Card.Title className="service-title">Référencement</Card.Title>
                {/* Titre du service */}
                <Card.Text>
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser
                  un site web pour le faire remonter dans les résultats des moteurs de recherche
                  (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </Card.Text>
                {/* Description du service */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer /> {/* Inclusion du pied de page */}
    </div>
  );
};

export default Services;
// Exportation du composant "Services" pour être utilisé ailleurs dans l'application
