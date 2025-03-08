import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Helmet } from "react-helmet"; // Pour la balise meta noindex
import Header from "../components/Header"; // Import du Header
import Footer from "../components/Footer"; // Import du Footer
import "../styles/legal.css";
import { faMapMarkedAlt, faMapPin, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône "Globe"

const Legal = () => {
  return (
    <div className="legal">
      {/* Balise meta pour désactiver l'indexation */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions Légales</title>
      </Helmet>

      {/* Inclusion du Header */}
      <Header />

      {/* Titre principal */}
      <Container>
        <h1 className="legal-title">Mentions Légales</h1>
        <div className="banner-bar"></div> {/* Ajout de la barre */}

        {/* Accordéon Bootstrap */}
        <Accordion defaultActiveKey="0" className="legal-accordion">
          {/* Section sur l'éditeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>

            <h2>John Doe</h2>

{/* Adresse avec icône carte */}
<p>
  <FontAwesomeIcon icon={faMapMarkedAlt} style={{ color: "black", marginRight: "10px" }} />
  40 rue Laure Diebold
</p>

{/* Ville avec icône cible */}
<p>
  <FontAwesomeIcon icon={faMapPin} style={{ color: "black", marginRight: "10px" }} />
  69009 Lyon, France
</p>

{/* Téléphone avec icône téléphone */}
<p>
  <FontAwesomeIcon icon={faPhoneAlt} style={{ color: "black", marginRight: "10px" }} />
  10 20 30 40 50
</p>

{/* Email avec icône enveloppe */}
<p>
  <FontAwesomeIcon icon={faEnvelope} style={{ color: "black", marginRight: "10px" }} />
  john.doe@gmail.com
</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
  <Accordion.Header>Hébergeur</Accordion.Header>
  <Accordion.Body>
    <h2>alwaysdata</h2>
    <div className="legal-section">
      91 Rue du Faubourg Saint-Honoré, 75008 Paris
    </div>

    <div className="legal-section">
      <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGlobe} style={{ color: "black", marginRight: "5px" }} />
        www.alwaysdata.com
      </a>
    </div>
  </Accordion.Body>
</Accordion.Item>


          {/* Section sur les crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>

              <div class="legal-section">
  Ce site a été réalisé par John Doe, étudiant au&nbsp;
  <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.
</div>

<div class="legal-section">
  <i>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site&nbsp;
  <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</i>
</div>

<div class="legal-section">
  <i>Le fav icon de ce site a été fourni par&nbsp;
  <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">John Doe Icons créé par Freepik - Flaticon</a>.</i>
</div>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Ajout d'un espace avant le footer */}
      <div className="footer-spacing"></div>

      {/* Inclusion du Footer */}
      <Footer />
    </div>
  );
};

export default Legal;
