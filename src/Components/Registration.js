import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(''); // Admin token state
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // New state to track success or failure

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, contact: contactNo, password, token }) // Include the token
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
        setIsSuccess(true); // Indicate success
      } else {
        setMessage(data.message || 'Registration failed.');
        setIsSuccess(false); // Indicate failure
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      setIsSuccess(false); // Indicate failure
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {message && (
        <Alert variant={isSuccess ? 'success' : 'danger'}>{message}</Alert>
      )}
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContactNo">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact no."
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicToken">
          <Form.Label>Admin Token</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter admin token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
