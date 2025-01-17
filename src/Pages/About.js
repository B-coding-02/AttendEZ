// src/pages/About.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About AttendEZ</h1>
          <p className="lead">
            AttendEZ is a cutting-edge attendance management system that leverages RFID technology to simplify and automate attendance tracking.
          </p>
          <p>
            Our platform is designed for educational institutions and organizations to provide a seamless and error-free way to manage attendance. Whether you're tracking students in a classroom or employees in an office, AttendEZ offers a fast, reliable, and secure solution.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Purpose</Card.Title>
              <Card.Text>
                To provide an efficient and paperless way of tracking attendance, ensuring accuracy and saving time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Features</Card.Title>
              <Card.Text>
                - Automatic attendance recording<br />
                - Detailed reports and analytics<br />
                - Easy integration with RFID scanners
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Creators</Card.Title>
              <Card.Text>
                AttendEZ was developed by Abdul and Bijoy to address the challenges of manual attendance tracking.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;