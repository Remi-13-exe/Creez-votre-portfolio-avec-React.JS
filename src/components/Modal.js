import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/modal.css";

const GithubModal = ({ show, onHide }) => {
  // Données fixes du profil GitHub
  const githubData = {
    login: "github-john-doe",
    avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4",
    html_url: "https://github.com/github-john-doe",
    bio: "As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.",
    name: "John Doe",
    public_repos: 1,
    followers: 17,
    following: 0,
  };

  return (
    <Modal show={show} onHide={onHide} centered className="dark-modal">
      <Modal.Header closeButton>
        <Modal.Title>Profil GitHub</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="github-modal-content">
          {/* Colonne gauche : Avatar */}
          <div className="github-avatar-wrapper">
            <img
              src={githubData.avatar_url}
              alt="Avatar"
              className="github-avatar"
            />
          </div>
          {/* Colonne droite : Informations */}
          <div className="github-info-wrapper">
            <h3>{githubData.name || "Nom non disponible"}</h3>
            <p><strong>Bio :</strong> {githubData.bio || "Aucune biographie disponible."}</p>
            <p><strong>Login :</strong> {githubData.login}</p>
            <p><strong>Public Repos :</strong> {githubData.public_repos}</p>
            <p><strong>Followers :</strong> {githubData.followers}</p>
            <p><strong>Following :</strong> {githubData.following}</p>
            <a
              href={githubData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Voir le profil GitHub
            </a>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GithubModal;
