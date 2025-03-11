import React, { useEffect } from "react";
// Importation de React et du hook useEffect pour gérer des effets secondaires

import { Container, Row, Col, Card, Button } from "react-bootstrap";
// Importation des composants Bootstrap pour la mise en page et le style

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importation de FontAwesome pour utiliser des icônes personnalisées

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
// Importation de l'icône de lien externe pour les boutons

import Header from "../components/Header";
// Importation du composant Header (en-tête)

import Footer from "../components/Footer";
// Importation du composant Footer (pied de page)

import banner from "../assets/images/banner.jpg";
// Importation de l'image de la bannière

import coder from "../assets/portfolio/coder.jpg";
import espaceBienEtre from "../assets/portfolio/espace-bien-etre.jpg";
import freshFood from "../assets/portfolio/fresh-food.jpg";
import restaurantJaponais from "../assets/portfolio/restaurant-japonais.jpg";
import screen from "../assets/portfolio/screens.jpg";
import seo from "../assets/portfolio/seo.jpg";
// Importation des images associées aux projets du portfolio

import "../styles/portfolio.css";
// Importation des styles CSS pour la page Portfolio

const Portfolio = () => {
  // Définition des projets affichés dans le portfolio
  const projects = [
    {
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      image: coder,
      link: "#",
      createdWith: "PHP - SYMPFONY",
    },
    {
      title: "Espace bien-être.",
      description: "Site de vente de produits frais en ligne",
      image: espaceBienEtre,
      link: "#",
      createdWith: "Site réalisé avec LARAVEL",
    },
    {
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne ",
      image: freshFood,
      link: "#",
      createdWith: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      image: restaurantJaponais,
      link: "#",
      createdWith: "Site réalisé avec WordPress",
    },
    {
      title: "Maquette d'un site web",
      description: "Création du  prototype d'un site",
      image: screen,
      link: "#",
      createdWith: "FIGMA",
    },
    {
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      image: seo,
      link: "#",
      createdWith: "Outils SEO",
    },
  ];

  // Utilisation de useEffect pour définir une hauteur égale pour toutes les cartes
  useEffect(() => {
    const setEqualHeights = () => {
      const cards = document.querySelectorAll(".project-card");
      let maxHeight = 0;

      cards.forEach((card) => {
        card.style.height = "auto"; // Réinitialise la hauteur
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight; // Définit la hauteur maximale
        }
      });

      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`; // Applique la hauteur maximale à toutes les cartes
      });
    };

    setEqualHeights(); // Applique la fonction au chargement
    window.addEventListener("resize", setEqualHeights); // Recalcule lors du redimensionnement
    return () => window.removeEventListener("resize", setEqualHeights); // Nettoyage de l'effet
  }, []);

  return (
    <div className="portfolio">
      <Header /> {/* En-tête de la page */}

      {/* ====== Bannière ====== */}
      <div className="banner">
        <img src={banner} alt="Bannière" className="banner-image" />
        {/* Image de la bannière */}
        <h1 className="banner-title">Portfolio</h1>
        {/* Titre principal */}
        <p>Voici quelques-unes de mes réalisations</p>
        {/* Description de la bannière */}
        <div className="banner-bar"></div>
        {/* Barre décorative sous le texte */}
      </div>

      {/* ====== Conteneur principal du portfolio ====== */}
      <Container className="portfolio-container">
        {/* ====== Première ligne de projets : Projets 1 à 3 ====== */}
        <Row className="mb-4">
          {projects.slice(0, 3).map((project, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              key={index}
              className="d-flex align-items-stretch"
            >
              <Card className="project-card flex-fill">
                {/* Image du projet */}
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                {/* Informations sur le projet */}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {/* Bouton pour voir le projet */}
                  <Button variant="primary" href={project.link}>
                    Voir le projet <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Button>
                </Card.Body>
                {/* Technologie utilisée */}
                <div className="created-with">{project.createdWith}</div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ====== Deuxième ligne de projets : Projets 4 à 6 ====== */}
        <Row className="mb-5">
          {projects.slice(3, 6).map((project, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              key={index}
              className="d-flex align-items-stretch"
            >
              <Card className="project-card flex-fill">
                {/* Image du projet */}
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                {/* Informations sur le projet */}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {/* Bouton pour voir le projet */}
                  <Button variant="primary" href={project.link}>
                    Voir le projet <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Button>
                </Card.Body>
                {/* Technologie utilisée */}
                <div className="created-with">{project.createdWith}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer /> {/* Pied de page */}
    </div>
  );
};

export default Portfolio;
// Exportation du composant Portfolio
