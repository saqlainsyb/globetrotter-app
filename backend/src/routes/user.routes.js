const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET endpoint to fetch a random destination
router.post('/register', userController.registerUser);

// GET endpoint to check if the user selected answer is correct.
router.get('/challenge-friend', userController.challengeFriend);

// GET user details of the invitor
router.get('/invite-info', userController.getInviteInfo)


module.exports = router;