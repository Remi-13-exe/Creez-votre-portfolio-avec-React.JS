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
      description: "Développement d'un site pour un coder.",
      image: coder,
      link: "#",
      createdWith: "PHP - SYMPFONY",
    },
    {
      title: "Projet 2",
      description: "Création d'un espace bien-être.",
      image: espaceBienEtre,
      link: "#",
      createdWith: "LARAVEL",
    },
    {
      title: "Projet 3",
      description: "Développement d'un site pour Fresh Food.",
      image: freshFood,
      link: "#",
      createdWith: "PHP et MySQL",
    },
    {
      title: "Projet 4",
      description: "Conception d'un site pour un restaurant japonais.",
      image: restaurantJaponais,
      link: "#",
      createdWith: "WordPress",
    },
    {
      title: "Projet 5",
      description: "Création d'un design interactif (écrans multiples).",
      image: screen,
      link: "#",
      createdWith: "FIGMA",
    },
    {
      title: "Projet 6",
      description: "Optimisation SEO pour une entreprise.",
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
