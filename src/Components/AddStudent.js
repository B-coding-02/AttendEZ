// src/components/AddStudent.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { addStudent } from '../api';

function AddStudent() {
  const [student, setStudent] = useState({ name: '', rfid: '', classId: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(student);
      setStudent({ name: '', rfid: '', classId: '' });
      alert('Student added successfully');
    } catch (error) {
      console.error('Error adding student:', error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Add New Student</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter student name"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formRFID" className="mt-3">
          <Form.Label>RFID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter RFID"
            value={student.rfid}
            onChange={(e) => setStudent({ ...student, rfid: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="formClass" className="mt-3">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Class ID"
            value={student.classId}
            onChange={(e) => setStudent({ ...student, classId: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Add Student
        </Button>
      </Form>
    </Container>
  );
}

export default AddStudent;
