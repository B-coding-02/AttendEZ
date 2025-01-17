// src/components/StudentDetails.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentDetails() {
  const { id } = useParams(); // Get student ID from URL params
  const [student, setStudent] = useState(null);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const studentResponse = await axios.get(`http://localhost:5000/api/students/${id}`);
        setStudent(studentResponse.data);

        const attendanceResponse = await axios.get(`http://localhost:5000/api/attendance/${id}`);
        setAttendance(attendanceResponse.data);
      } catch (error) {
        console.error('Error fetching student details:', error.message);
      }
    };

    fetchStudentDetails();
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Student Details</h1>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>RFID:</strong> {student.rfid}</p>
          <p><strong>Class:</strong> {student.class.name}</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Attendance Records</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentDetails;
