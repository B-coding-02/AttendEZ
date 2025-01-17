// src/components/Attendance.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';

function Attendance() {
  return (
    <Container className="mt-5">
      <h1>Attendance Records</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Class 10</td>
            <td>Present</td>
          </tr>
          {/* Additional rows go here */}
        </tbody>
      </Table>
    </Container>
  );
}

export default Attendance;
