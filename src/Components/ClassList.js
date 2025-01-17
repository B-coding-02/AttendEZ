// src/components/ClassList.js
import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

function ClassList() {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newClass, setNewClass] = useState({ name: '', section: '' });

  // Fetch classes from backend
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  // Handle adding a new class
  const handleAddClass = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/classes', newClass);
      setClasses([...classes, response.data]); // Add the new class to the state
      setShowModal(false);
      setNewClass({ name: '', section: '' }); // Reset form
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Class List</h1>
      <Button onClick={() => setShowModal(true)} className="mb-3">Add New Class</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Section</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls, index) => (
            <tr key={cls.id}>
              <td>{index + 1}</td>
              <td>{cls.name}</td>
              <td>{cls.section}</td>
              <td>
                <Button variant="danger" onClick={() => {/* handleDeleteClass(cls.id) */}}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for adding a new class */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formClassName">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter class name"
                value={newClass.name}
                onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSection" className="mt-3">
              <Form.Label>Section</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter section"
                value={newClass.section}
                onChange={(e) => setNewClass({ ...newClass, section: e.target.value })}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddClass}>Add Class</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ClassList;
