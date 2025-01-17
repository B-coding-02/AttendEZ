const express = require('express');
const router = express.Router();
const { addStudent } = require('../controllers/studentController');

// Routes
router.post('/add', addStudent);

module.exports = router;
