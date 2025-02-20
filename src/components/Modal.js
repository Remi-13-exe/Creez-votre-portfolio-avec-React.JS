import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const GitHubModal = ({ show, onHide }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (show) {
      fetch('https://api.github.com/users/github-johndoe')
        .then((response) => response.json())
        .then((data) => setProfileData(data));
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Profil GitHub de John Doe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {profileData ? (
          <div>
            <p>Nom: {profileData.name}</p>
            <p>Bio: {profileData.bio}</p>
            <p>Repos publics: {profileData.public_repos}</p>
            <p>Followers: {profileData.followers}</p>
          </div>
        ) : (
          <p>Chargement...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GitHubModal;
