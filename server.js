const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const cors = require('cors');

// Database connection
const dbConnection = require('./db');

// Middleware to parse JSON
http://localhost:5000/api/users/register
app.use(express.json());

// Load environment variables
dotenv.config();

// Enable CORS
app.use(cors());


// API Routes
app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/users/', require('./routes/usersRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

// Base route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
app.listen(port, () => console.log(`Node JS Server Started on Port ${port}`));
