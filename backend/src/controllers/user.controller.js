// /src/controllers/userController.js
const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');

exports.registerUser = async (req, res) => {
  try {
    const { username, score, correctAnswers, incorrectAnswers } = req.body;
    if (!username) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Username is required' });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      existingUser.set({
          score,
          correctAnswers,
          incorrectAnswers
      });
  
      const updatedUser = await existingUser.save();
      return res.status(StatusCodes.OK).json(updatedUser);
  }
  
    const newUser = new User({ username, score, correctAnswers, incorrectAnswers });
    const savedUser = await newUser.save();
    return res.status(StatusCodes.CREATED).json(savedUser);
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to register user' });
  }
};

exports.challengeFriend = async (req, res) => {
    try {
      const { userId } = req.query; // The user who is challenging a friend
      if (!userId) {
        return res.status(400).json({ error: "Missing userId" });
      }
      const user = await User.findById(userId);
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found' });
      }
  
      // Generate an invite link using the user's ID (or any token of your choice)
      const inviteLink = `${process.env.FRONTEND_URL}/play-globetrotter/invitation?userId=${user._id}`;
  
      // Generate a dynamic image URL (this example uses a dummy image generator).
      // In a real scenario, you might integrate with a third-party image generation service.
      const dynamicImageUrl = `https://dummyimage.com/600x400/000/fff.png&text=Score:${user.score}`;
  
      return res.status(StatusCodes.OK).json({
        inviteLink,
        dynamicImageUrl,
        userScore: user.score
      });
    } catch (error) {
      console.error('Error generating challenge invite:', error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to generate challenge invite' });
    }
  };

  exports.getInviteInfo = async (req, res) => {
    try {
      // Expect the userId as a query parameter (e.g., /invite-info?userId=someId)
      const { userId } = req.query;
      if (!userId) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: 'Missing userId query parameter' });
      }
      
      // Retrieve the invitor's details from the database
      const user = await User.findById(userId);
      if (!user) {
        return res
          .status(StatusCodes.NOT_FOUND)
          .json({ error: 'User not found' });
      }
      
      // Return the user's details. Adjust fields if you wish to hide sensitive information.
      return res.status(StatusCodes.OK).json({
        username: user.username,
        score: user.score,
        correctAnswers: user.correctAnswers,
        incorrectAnswers: user.incorrectAnswers,
        _id: user._id
      });
      
    } catch (error) {
      console.error('Error fetching invite info:', error);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: 'Failed to get invite info' });
    }
  };
  