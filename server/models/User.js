const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/createUser', async (req, res) => {
  const { name } = req.body;

  try {
    let user = await User.findOne({ name });

    if (user) {
      // User already exists, retrieve user data
      res.json(user);
    } else {
      // Create a new user
      user = new User({ name });
      await user.save();
      res.json(user);
    }
  } catch (error) {
    console.error('Error creating/retrieving user:', error);
    res.status(500).json({ message: 'Error creating/retrieving user' });
  }
});

module.exports = router;
