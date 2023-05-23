const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password
    });
    
    // Save the user to the database
    await newUser.save();
    
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error occurred during registration:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

module.exports = router;
