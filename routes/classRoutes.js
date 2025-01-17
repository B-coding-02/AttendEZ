// routes/classRoutes.js
const express = require('express');
const router = express.Router();
const { addClass, getAllClasses, deleteClass } = require('../controllers/classController');

router.get('/', getAllClasses); // Fetch all classes
router.post('/', addClass);      // Add a new class
router.delete('/:id', deleteClass); // Delete a class by ID

module.exports = router;
