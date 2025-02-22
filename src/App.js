// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './Components/Navbar';
import Home from './Pages/Home';
import Dashboard from './Components/Dashboard';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ProtectedRoute from './Components/ProtectedRoute';  
import Unauthorized from './Components/Unauthorized';
import Logout from './Components/LogOut';
import ClassList from './Components/ClassList';
import './App.css';


function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Protect the dashboard route */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/classes" element={<ProtectedRoute><ClassList /></ProtectedRoute>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
