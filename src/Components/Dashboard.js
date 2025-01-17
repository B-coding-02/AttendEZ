// // src/components/Dashboard.js
// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import ClassManager from './ClassManager';

// function Dashboard() {
//   return (
//     <Container className="mt-5">
//       <h2>Welcome to AttendEZ Dashboard</h2>
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>View Classes</Card.Title>
//               <Card.Text>Manage and view student attendance by class.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Add Students</Card.Title>
//               <Card.Text>Register new students and assign them RFID cards.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Attendance Report</Card.Title>
//               <Card.Text>View detailed attendance reports.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       <ClassManager/>
      
//     </Container>

//   );
// }

// export default Dashboard;

// src/components/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>View Classes</Card.Title>
              <Card.Text>Manage and view all classes.</Card.Text>
              <Card.Link href="/classes">Go to Classes</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Add Students</Card.Title>
              <Card.Text>Register new students and manage their information.</Card.Text>
              <Card.Link href="/students">Go to Students</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Attendance Report</Card.Title>
              <Card.Text>View and export attendance reports.</Card.Text>
              <Card.Link href="/attendance">View Reports</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
