// /models/destination.js
const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String },
  clues: [{ type: String }],
  fun_fact: [{ type: String }],
  trivia: [{ type: String }],
});

module.exports = mongoose.model('Destination', DestinationSchema);
