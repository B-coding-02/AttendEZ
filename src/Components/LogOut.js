import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function Logout() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const savePendingChanges = async () => {
    // Logic to save pending changes, such as sending data to the backend
    console.log('Saving pending changes...');
    // Example: await axios.post('/api/save-changes', { /* data */ });
  };
  
  const handleLogout = async () => {
    try {
      // Call a function to save any pending changes
      await savePendingChanges();
      // Clear session data
      sessionStorage.removeItem('loggedIn');
      sessionStorage.removeItem('role');
      // Redirect to login
      navigate('/login');
    } catch (error) {
      console.error('Error saving changes:', error.message);
    }
  };
  

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to log out? Make sure all your progress is saved.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Logout;
