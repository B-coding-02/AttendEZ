// src/pages/Contact.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center">
        Have questions or need assistance? Get in touch with us, and we'll get back to you as soon as possible.
      </p>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h3>Reach Us At</h3>
          <p>Email: support@attendez.com</p>
          <p>Phone: +91 12345 67890</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;