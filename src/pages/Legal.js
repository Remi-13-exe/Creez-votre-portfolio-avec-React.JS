import React from "react";
// Importation de React pour la création des composants

import { Accordion, Container } from "react-bootstrap";
// Importation de Bootstrap pour la mise en page et l'accordéon

import { Helmet } from "react-helmet";
// Importation de Helmet pour inclure des balises meta spécifiques

import Header from "../components/Header";
// Importation du composant Header pour l'en-tête de la page

import Footer from "../components/Footer";
// Importation du composant Footer pour le bas de page

import "../styles/legal.css";
// Importation des styles CSS spécifiques à la page Legal

import {
  faMapMarkedAlt,
  faMapPin,
  faPhoneAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
// Importation des icônes nécessaires depuis FontAwesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importation de FontAwesome pour l'intégration des icônes

const Legal = () => {
  return (
    <div className="legal">
      {/* Balise meta noindex pour désactiver l'indexation de cette page */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales</title>
      </Helmet>

      {/* Inclusion du Header */}
      <Header />

      {/* ====== Titre Principal ====== */}
      <Container>
        <h1 className="legal-title">Mentions Légales</h1>
        {/* Barre décorative sous le titre */}
        <div className="banner-bar"></div>

        {/* ====== Accordéon pour les sections des mentions légales ====== */}
        <Accordion defaultActiveKey="0" className="legal-accordion">
          {/* Section 1 : Informations sur l'éditeur */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h2>John Doe</h2>

              {/* Adresse complète de l'éditeur */}
              <p>
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  style={{ color: "black", marginRight: "10px" }}
                />
                40 rue Laure Diebold
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faMapPin}
                  style={{ color: "black", marginRight: "10px" }}
                />
                69009 Lyon, France
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  style={{ color: "black", marginRight: "10px" }}
                />
                10 20 30 40 50
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "black", marginRight: "10px" }}
                />
                john.doe@gmail.com
              </p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section 2 : Informations sur l'hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h2>alwaysdata</h2>
              <div className="legal-section">
                91 Rue du Faubourg Saint-Honoré, 75008 Paris
              </div>
              <div className="legal-section">
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGlobe}
                    style={{ color: "black", marginRight: "5px" }}
                  />
                  www.alwaysdata.com
                </a>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section 3 : Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>

              <div className="legal-section">
                Ce site a été réalisé par John Doe, étudiant au&nbsp;
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Centre Européen de formation
                </a>.
              </div>

              <div className="legal-section">
                <i>
                  Les images utilisées sur ce site sont libres de droits et ont
                  été obtenues sur le site&nbsp;
                  <a
                    href="https://www.pixabay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pixabay
                  </a>.
                </i>
              </div>

              <div className="legal-section">
                <i>
                  Le fav icon de ce site a été fourni par&nbsp;
                  <a
                    href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    John Doe Icons créé par Freepik - Flaticon
                  </a>.
                </i>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Espacement avant le footer */}
      <div className="footer-spacing"></div>

      {/* Inclusion du Footer */}
      <div className="footer-legal">
      <Footer />
      </div>
    </div>
  );
};

export default Legal;
// Exportation du composant Legal pour une utilisation ailleurs
