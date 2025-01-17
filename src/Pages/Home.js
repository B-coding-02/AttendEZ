// src/pages/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1>Welcome to AttendEZ</h1>
          <p className="lead">
            Simplify attendance management with our RFID-based system.
          </p>
          <p>
            AttendEZ is designed to streamline attendance tracking for schools, colleges, and organizations. Use RFID technology to record and manage attendance effortlessly.
          </p>
          <Button variant="primary" href="/Dashboard" className="m-2">
            Go to Dashboard
          </Button>
          <Button variant="outline-primary" href="/about" className="m-2">
            Learn More
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <h3>View Classes</h3>
          <p>Quickly check attendance status for each class.</p>
        </Col>
        <Col md={4}>
          <h3>Add Students</h3>
          <p>Easily register students and assign RFID cards.</p>
        </Col>
        <Col md={4}>
          <h3>Attendance Reports</h3>
          <p>Get detailed attendance records and reports.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;