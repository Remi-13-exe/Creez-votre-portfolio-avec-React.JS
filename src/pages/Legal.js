import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Helmet } from "react-helmet"; // Pour la balise meta noindex
import Header from "../components/Header"; // Import du Header
import Footer from "../components/Footer"; // Import du Footer
import "../styles/legal.css";

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
            <Accordion.Header>L’Éditeur du site</Accordion.Header>
            <Accordion.Body>
              Ce site est édité par John Doe, développeur web en formation.  
              <br />
              Adresse : 123 rue du Code, 75000 Paris  
              <br />
              Email : contact@johndoeportfolio.com  
              <br />
              Téléphone : +33 (0)6 12 34 56 78
            </Accordion.Body>
          </Accordion.Item>

          {/* Section sur l'hébergeur du site */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>L’Hébergeur du site</Accordion.Header>
            <Accordion.Body>
              Ce site est hébergé par OVHcloud.  
              <br />
              Adresse : 2 rue Kellermann, 59100 Roubaix, France  
              <br />
              Téléphone : +33 9 72 10 10 07  
              <br />
              Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section sur les crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h2>Crédits</h2>

              Ce site a été réalisé par John Doe, étudiant au&nbsp;
<a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.

              <br />
            <i>  Les images utilisés sur ce site sont libres de droits et ont été obtenues sur le site&nbsp;
            <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.  </i>
            <br />
              - Le développement et la mise en page de ce site ont été réalisés en React et Bootstrap.
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
