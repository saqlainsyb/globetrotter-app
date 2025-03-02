# globetrotter-app

🌍 Globetrotter App
Welcome to Globetrotter, your travel companion app designed to explore destinations, manage travel plans, and experience the world digitally.

📋 Project Overview
This project was developed as part of an assignment to demonstrate full-stack development skills, covering frontend, backend, and deployment.

🚀 Tech Stack:
Technology	Purpose
React	Frontend UI
Node.js	Backend Server
Express.js	API Handling
MongoDB	Database
Mongoose	Database ODM
Fetch	API requests
Vite	React Build Tool
CSS/SCSS	Styling
GitHub Actions	CI/CD Automation
Render	Deployment (Backend/DB)
Vercel	Deployment (Frontend)
***Used ChatGPT to generate 100 datasets for destination quizes***

📂 Project Structure:
globetrotter-app/
├── backend/         # Node.js + Express backend
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── controllers/ # Route logic
│   └── app.js       # Server entry point
├── frontend/        # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
├── README.md
└── package.json     # Overall project dependencies



⚙️ Setup & Installation: 
Prerequisites
Node.js (v18+)
MongoDB (local or cloud like Atlas)
Git
-------------------------------------------------------------------------
Clone the Repo
git clone https://github.com/saqlainsyb/globetrotter-app.git
cd globetrotter-app
------------------------------------------------------------------------

Backend Setup
1. Navigate to backend folder: cd backend

2.Install dependencies: npm install

3. Set environment variables (create .env file in backend folder:
MONGO_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URI=your_frontend_uri

4. Start the backend server: npm start
-------------------------------------------------------------------------

Frontend Setup:
1. Navigate to frontend folder: cd ../frontend

2. Install dependencies: npm install

3. Start the frontend: npm run dev

4. Open browser at: http://localhost:5173

--------------------------------------------------------------------------

🌐 Live Demo
Frontend (Vercel): https://globetrotter-app-omega.vercel.app/
Backend (Render): https://globetrotter-core.onrender.com/api


