// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const listEndpoints = require('express-list-endpoints');


dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
const allowedOrigins = [
  'http://localhost:5173',                         // Local dev frontend
  'https://globetrotter-app-omega.vercel.app'     // Production frontend
];

app.use(cors({
  origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  credentials: true
}));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Routes
app.use('/api/destinations', require('./src/routes/destination.routes'));
app.use('/api/user', require('./src/routes/user.routes'));

const endpoints = listEndpoints(app);
endpoints.forEach(route => {
  // For each method in this route, log a line with the method and path
  route.methods.forEach(method => {
    console.log(`${method} ${route.path}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
