const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

/* ================= REGISTER ================= */
router.post('/register', async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      college,
      year,
      major,
      city,
      state,
    } = req.body;

    /* 🔍 Basic validation */
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !college ||
      !year ||
      !major ||
      !city ||
      !state
    ) {
      return res.status(400).json({
        success: false,
        msg: 'All fields are required',
      });
    }

    /* 🔍 Check if user already exists */
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        msg: 'User already exists',
      });
    }

    /* 👤 Create user */
    const user = new User({
      name,
      email,
      password,
      phone,
      college,
      year,
      major,
      city,
      state,
      role: 'user',
    });

    await user.save(); // password hashing happens here

    /* 🔐 JWT */
    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({
      success: false,
      msg: 'Server error',
    });
  }
});

/* ================= LOGIN ================= */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({
        success: false,
        msg: 'Invalid credentials',
      });
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        totalPoints: user.totalPoints,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({
      success: false,
      msg: 'Server error',
    });
  }
});

// ====================Google Login=======================

router.post('/google-login', async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        msg: 'User not found. Please register first.',
      });
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        totalPoints: user.totalPoints,
      },
    });
  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({
      success: false,
      msg: 'Server error',
    });
  }
});


module.exports = router;
