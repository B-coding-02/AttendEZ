import React from 'react';
import { Container } from 'react-bootstrap';

function Unauthorized() {
  return (
    <Container className="mt-5 text-center">
      <h1>Unauthorized</h1>
      <p>You do not have access to this page.</p>
    </Container>
  );
}

export default Unauthorized;
