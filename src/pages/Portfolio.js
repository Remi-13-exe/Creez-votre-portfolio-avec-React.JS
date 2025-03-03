import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = () => {
  const projects = [
    {
      title: "Projet 1",
      description: "Description du projet 1.",
      link: "#"
    },
    {
      title: "Projet 2",
      description: "Description du projet 2.",
      link: "#"
    },
    {
      title: "Projet 3",
      description: "Description du projet 3.",
      link: "#"
    },
    {
      title: "Projet 4",
      description: "Description du projet 4.",
      link: "#"
    },
    {
      title: "Projet 5",
      description: "Description du projet 5.",
      link: "#"
    },
    {
      title: "Projet 6",
      description: "Description du projet 6.",
      link: "#"
    }
  ];

  return (
    <div className="portfolio">
      <Header />
      <Container className="portfolio-container">
        <h1 className="portfolio-title">Portfolio de John Doe</h1>
        <Row>
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="d-flex align-items-stretch">
              <Card className="project-card flex-fill">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>
                    Voir le projet <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </Button>
                </Card.Body>
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
