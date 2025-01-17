const bcrypt = require('bcrypt');
const User = require('../models/User');

// Register User
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error registering user', error });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json({ success: true, role: user.role }); // Assume role is part of user schema
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error logging in', error });
  }
};

module.exports = { registerUser, loginUser };
