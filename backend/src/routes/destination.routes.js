// /routes/destination.js
const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destination.controller');

// GET endpoint to fetch a random destination
router.get('/', destinationController.getRandomDestination);

// GET endpoint to check if the user selected answer is correct.
router.get('/check-answer', destinationController.checkAnswer)

// POST endpoint to create a new destination
router.post('/', destinationController.createDestination);

module.exports = router;
