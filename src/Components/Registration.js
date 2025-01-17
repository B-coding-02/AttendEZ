// src/components/Registration.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      setSuccess(true);
      setError('');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error registering:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">Register</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Registration successful!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Registration;
