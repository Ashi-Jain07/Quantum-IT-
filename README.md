## Assignment Setup Guide

This project is divided into two parts: **Frontend (Vite-project)** and **Backend (Node.js/Express)**.

##  Frontend Setup (Vite)

### 1. Navigate to the frontend project directory:
cd vite-project

### 2. Install dependencies:
npm install

### 3. Edit a .env file in the root of vite-project directory with the following content:
VITE_API_URL=http://localhost:5000
Replace the URL with your actual backend URL if different.

### 4. Run the frontend development server:
npm run dev


## Backend Setup (Node.js/Express)
### 1. Navigate to the backend project directory:
cd backend

### 2. Install dependencies:
npm install

### 3. Edit a .env file in the root of backend directory with the following keys:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Replace the values with your actual MongoDB URI and a secure JWT secret.

### 4. Start the backend server:
npm start

You're all set!
Now the frontend should communicate with the backend successfully.
