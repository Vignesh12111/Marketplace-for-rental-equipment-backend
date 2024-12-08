const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const cors = require('cors');

// Database connection
const dbConnection = require('./db');

// Middleware to parse JSON
app.use(express.json());

// Load environment variables
dotenv.config();

// Enable CORS
app.use(cors());

// API Routes
app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/users/', require('./routes/usersRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));

// Base route
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
app.listen(port, () => console.log(`Node JS Server Started on Port ${port}`));
