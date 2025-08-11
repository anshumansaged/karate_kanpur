const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Initialize default admin (run once)
router.post('/init', async (req, res) => {
  try {
    // Check if any admin exists
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' });
    }
    
    // Create default super admin
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash('admin123', saltRounds);
    
    const admin = new Admin({
      name: 'Super Admin',
      email: 'admin@kyokushin.com',
      password: hashedPassword,
      role: 'super_admin'
    });
    
    await admin.save();
    
    res.json({
      message: 'Default admin created successfully',
      credentials: {
        email: 'admin@kyokushin.com',
        password: 'admin123'
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Public login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    
    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        adminId: admin._id, 
        role: admin.role,
        email: admin.email 
      },
      process.env.JWT_SECRET || 'kyokushin_jwt_secret_key_2024',
      { expiresIn: '24h' }
    );
    
    // Update last login
    admin.lastLogin = new Date();
    await admin.save();
    
    res.json({
      message: 'Login successful',
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Verify token
router.get('/verify', async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'kyokushin_jwt_secret_key_2024');
    const admin = await Admin.findById(decoded.adminId).select('-password');
    
    if (!admin) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    res.json({
      valid: true,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin
      }
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Register new admin (temporary endpoint for setup)
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, secretKey } = req.body;
    
    // Simple secret key check for registration
    if (secretKey !== 'kyokushin_setup_2024') {
      return res.status(403).json({ error: 'Invalid secret key' });
    }
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin with this email already exists' });
    }
    
    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
      role: 'admin'
    });
    
    await admin.save();
    
    res.status(201).json({
      message: 'Admin registered successfully',
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Reset password request
router.post('/reset-password-request', async (req, res) => {
  try {
    const { email } = req.body;
    
    const admin = await Admin.findOne({ email });
    if (!admin) {
      // Don't reveal if email exists or not
      return res.json({ message: 'If the email exists, a reset link will be sent' });
    }
    
    // In a real application, you would:
    // 1. Generate a secure reset token
    // 2. Store it with expiration time
    // 3. Send email with reset link
    
    // For now, just return success
    res.json({ message: 'If the email exists, a reset link will be sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logout
router.post('/logout', async (req, res) => {
  try {
    // In a real application with token blacklisting:
    // const token = req.header('Authorization')?.replace('Bearer ', '');
    // Add token to blacklist with expiration
    
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
