import React from "react";
// Importation de React pour la création de composants

import { Container, Row, Col, Form, Button } from "react-bootstrap";
// Importation de composants Bootstrap pour la mise en page et le style

import Header from "../components/Header";
// Importation du composant Header (en-tête)

import Footer from "../components/Footer";
// Importation du composant Footer (pied de page)

import "../styles/contact.css";
// Importation du fichier CSS dédié pour la page contact

import { faMapPin, faMapMarkedAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// Importation d'icônes spécifiques depuis FontAwesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importation de FontAwesome pour afficher les icônes dans les éléments

const Contact = () => {
  return (
    <div className="contact-page">
      <Header /> {/* En-tête de la page */}

      {/* ====== Section Bannière ====== */}
      <div className="banner">
        <h1 className="banner-title">Contact</h1>
        {/* Titre principal */}
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact
        </p>
        {/* Texte descriptif */}
        <div className="banner-bar"></div>
        {/* Barre décorative */}
      </div>

      {/* ====== Conteneur Principal ====== */}
      <Container className="contact-container">
        <Row>
          {/* ====== Colonne 1 : Formulaire de contact ====== */}
          <Col md={6} className="contact-form">
            <h2>Formulaire de contact</h2>
            <div className="banner-bar"></div>
            {/* Formulaire pour l'utilisateur */}
            <Form>
              <Form.Group controlId="formName">
                <Form.Control type="text" placeholder="Votre nom" required />
                {/* Champ pour saisir le nom */}
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Votre adresse email"
                  required
                />
                {/* Champ pour saisir l'adresse email */}
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Control
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  required
                />
                {/* Champ pour saisir le numéro de téléphone */}
              </Form.Group>
              <Form.Group controlId="formSubject">
                <Form.Control type="text" placeholder="Sujet" required />
                {/* Champ pour saisir le sujet */}
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={12}
                  placeholder="Votre message"
                  required
                />
                {/* Champ pour saisir le message */}
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Envoyer
              </Button>
              {/* Bouton pour soumettre le formulaire */}
            </Form>
          </Col>

          {/* ====== Colonne 2 : Coordonnées et Google Maps ====== */}
          <Col md={6} className="contact-info">
            <h2>Coordonnées</h2>
            <div className="banner-bar"></div>
            {/* Coordonnées de contact */}
            <p>
              <FontAwesomeIcon icon={faMapPin} className="icon" /> 40 rue Laure Diebold
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" /> 69009 Lyon, France
            </p>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="icon" /> 10 20 30 40 50
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="icon" /> john.doe@gmail.com
            </p>

            {/* Intégration de Google Maps */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2539315082095!2d4.796403976619983!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1741529245379!5m2!1sfr!2sfr"
                width="100%"
                height="415"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
              {/* Carte Google Maps */}
            </div>
          </Col>
        </Row>
      </Container>

      <Footer /> {/* Pied de page */}
    </div>
  );
};

export default Contact;
// Exportation du composant Contact
