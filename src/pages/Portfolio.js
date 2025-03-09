import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner from "../assets/images/banner.jpg";
import coder from "../assets/portfolio/coder.jpg";
import espaceBienEtre from "../assets/portfolio/espace-bien-etre.jpg";
import freshFood from "../assets/portfolio/fresh-food.jpg";
import restaurantJaponais from "../assets/portfolio/restaurant-japonais.jpg";
import screen from "../assets/portfolio/screens.jpg";
import seo from "../assets/portfolio/seo.jpg";
import "../styles/portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Projet 1",
      description: "Création d'une API",
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

  useEffect(() => {
    const setEqualHeights = () => {
      const cards = document.querySelectorAll(".project-card");
      let maxHeight = 0;

      cards.forEach((card) => {
        card.style.height = "auto";
        if (card.offsetHeight > maxHeight) {
          maxHeight = card.offsetHeight;
        }
      });

      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeights();
    window.addEventListener("resize", setEqualHeights);
    return () => window.removeEventListener("resize", setEqualHeights);
  }, []);

  return (
    <div className="portfolio">
      <Header />
      <div className="banner">
        <img src={banner} alt="Bannière" className="banner-image" />
        <h1 className="banner-title">Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations</p>
        <div className="banner-bar"></div>
      </div>
      <Container className="portfolio-container">
        {/* Première ligne : Projets 1 à 3 */}
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
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>
                    Voir le projet <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Button>
                </Card.Body>
                {/* Sous-cadre sans mention "Créé avec" */}
                <div className="created-with">{project.createdWith}</div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Deuxième ligne : Projets 4 à 6 */}
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
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>
                    Voir le projet <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Button>
                </Card.Body>
                {/* Sous-cadre sans mention "Créé avec" */}
                <div className="created-with">{project.createdWith}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
