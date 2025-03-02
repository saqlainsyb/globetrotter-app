// /src/controllers/destinationController.js
const Destination = require('../models/destination');
const { StatusCodes } = require('http-status-codes');

exports.getRandomDestination = async (req, res) => {
  try {
    const count = await Destination.countDocuments();
    const random = Math.floor(Math.random() * count);
    const destination = await Destination.findOne().skip(random);

    if (!destination) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'Destination not found' });
    }

    // Select 1-2 random clues from the destination's clues array
    const cluesArray = destination.clues || [];
    let numClues = Math.floor(Math.random() * 2) + 1; // either 1 or 2 clues
    if (cluesArray.length < numClues) {
      numClues = cluesArray.length;
    }
    const shuffledClues = cluesArray.sort(() => Math.random() - 0.5);
    const selectedClues = shuffledClues.slice(0, numClues);

    // Generate answer choices by getting 3 random incorrect destination names
    const incorrectDestinations = await Destination.aggregate([
      { $match: { _id: { $ne: destination._id } } },
      { $sample: { size: 3 } },
      { $project: { city: 1, _id: 0 } }
    ]);
    
    const choices = incorrectDestinations.map(item => item.city);
    choices.push(destination.city); // add the correct answer
    const shuffledChoices = choices.sort(() => Math.random() - 0.5);

    // Return only clues and answer choices
    return res.status(StatusCodes.OK).json({
      _id: destination._id,
      clues: selectedClues,
      choices: shuffledChoices
    });
    
  } catch (error) {
    console.error('Error fetching destination:', error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'Failed to load destination' });
  }
};

exports.createDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    const savedDestination = await newDestination.save();
    return res.status(StatusCodes.CREATED).json(savedDestination);
  } catch (error) {
    console.error('Error creating destination:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to create destination' });
  }
};

exports.checkAnswer = async (req, res) => {
  try {
    const { destinationId, userAnswer } = req.query;
    
    // Validate request payload
    if (!destinationId || !userAnswer) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Missing destinationId or userAnswer' });
    }
    
    // Retrieve the destination based on the provided id
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Destination not found' });
    }
    
    // Check if the submitted answer is correct (ignoring case differences)
    const isCorrect = destination.city.toLowerCase() === userAnswer.toLowerCase();
    
    // Optionally, include a fun fact or other details to send back to the user
    // (For example, you might send back a fun fact regardless of whether the answer was correct)
    const funFact = destination.fun_fact || "No fun fact available for this destination.";

    return res.status(StatusCodes.OK).json({
      isCorrect,
      funFact,
      // Optionally, you can return the correct answer if needed (for instance, after an incorrect attempt)
      correctAnswer: isCorrect ? undefined : destination.city
    });
    
  } catch (error) {
    console.error('Error checking answer:', error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to check answer' });
  }
};