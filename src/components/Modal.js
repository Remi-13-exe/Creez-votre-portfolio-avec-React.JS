import React from "react";
// Importation de React pour la création de composants

import { Modal, Button } from "react-bootstrap";
// Importation de Modal et Button depuis Bootstrap pour l'affichage et le contrôle du modal

import "../styles/modal.css";
// Importation des styles spécifiques pour le modal

const GithubModal = ({ show, onHide }) => {
  // Données statiques représentant un profil GitHub fictif
  const githubData = {
    login: "github-john-doe", // Identifiant du compte GitHub
    avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4", // URL de l'image d'avatar
    html_url: "https://github.com/github-john-doe", // Lien vers le profil GitHub
    bio: "As we all know, John Doe's identity is unknown.\r\nI just wanted to contribute without being known.", // Description ou biographie de l'utilisateur
    name: "John Doe", // Nom complet
    public_repos: 1, // Nombre de dépôts publics
    followers: 17, // Nombre de followers
    following: 0, // Nombre de comptes suivis
  };

  return (
    <Modal
      show={show} // Contrôle l'affichage du modal
      onHide={onHide} // Fonction appelée pour fermer le modal
      centered // Centre verticalement le modal
      className="dark-modal" // Applique une classe CSS personnalisée
    >
      {/* En-tête du modal avec bouton de fermeture */}
      <Modal.Header closeButton>
        <Modal.Title>Profil GitHub</Modal.Title>
      </Modal.Header>

      {/* Corps du modal */}
      <Modal.Body>
        <div className="github-modal-content">
          {/* Colonne gauche : Avatar de l'utilisateur */}
          <div className="github-avatar-wrapper">
            <img
              src={githubData.avatar_url} // Image d'avatar
              alt="Avatar" // Texte alternatif pour l'image
              className="github-avatar" // Classe CSS personnalisée pour l'avatar
            />
          </div>
          {/* Colonne droite : Informations sur le profil */}
          <div className="github-info-wrapper">
            <h3>{githubData.name || "Nom non disponible"}</h3> {/* Nom de l'utilisateur */}
            <p>
              <strong>Bio :</strong> {githubData.bio || "Aucune biographie disponible."}
            </p>
            <p>
              <strong>Login :</strong> {githubData.login} {/* Identifiant GitHub */}
            </p>
            <p>
              <strong>Public Repos :</strong> {githubData.public_repos} {/* Nombre de dépôts publics */}
            </p>
            <p>
              <strong>Followers :</strong> {githubData.followers} {/* Nombre de followers */}
            </p>
            <p>
              <strong>Following :</strong> {githubData.following} {/* Nombre de comptes suivis */}
            </p>
            <a
              href={githubData.html_url} // Lien vers le profil GitHub
              target="_blank" // Ouvre le lien dans un nouvel onglet
              rel="noopener noreferrer" // Sécurise le lien en évitant les problèmes de sécurité
              className="github-link" // Classe CSS personnalisée pour le lien
            >
              Voir le profil GitHub
            </a>
          </div>
        </div>
      </Modal.Body>

      {/* Pied du modal avec bouton de fermeture */}
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GithubModal;
// Exportation du composant pour une utilisation dans d'autres parties de l'application
