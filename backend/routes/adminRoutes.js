const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Dojo = require('../models/Dojo');
const Student = require('../models/Student');
const Event = require('../models/Event');
const { auth } = require('../middleware/auth');

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
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
      { adminId: admin._id, role: admin.role },
      process.env.JWT_SECRET || 'your_jwt_secret',
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
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get admin profile
router.get('/profile', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update admin profile
router.patch('/profile', auth, async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    const admin = await Admin.findByIdAndUpdate(
      req.adminId,
      { name, email, phone },
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json({
      message: 'Profile updated successfully',
      admin
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Change password
router.patch('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    const admin = await Admin.findById(req.adminId);
    
    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }
    
    // Hash new password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    
    // Update password
    admin.password = hashedPassword;
    await admin.save();
    
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get dashboard statistics
router.get('/dashboard', auth, async (req, res) => {
  try {
    const [
      totalDojos,
      pendingDojos,
      approvedDojos,
      totalStudents,
      pendingStudents,
      approvedStudents,
      totalEvents,
      upcomingEvents
    ] = await Promise.all([
      Dojo.countDocuments(),
      Dojo.countDocuments({ status: 'pending' }),
      Dojo.countDocuments({ status: 'approved' }),
      Student.countDocuments(),
      Student.countDocuments({ status: 'pending' }),
      Student.countDocuments({ status: 'approved' }),
      Event.countDocuments(),
      Event.countDocuments({ date: { $gte: new Date() }, status: 'published' })
    ]);
    
    // Recent activities
    const recentDojos = await Dojo.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name status createdAt');
      
    const recentStudents = await Student.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('personalInfo.firstName personalInfo.lastName status createdAt');
    
    const recentEvents = await Event.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title status date createdAt');
    
    res.json({
      statistics: {
        dojos: {
          total: totalDojos,
          pending: pendingDojos,
          approved: approvedDojos
        },
        students: {
          total: totalStudents,
          pending: pendingStudents,
          approved: approvedStudents
        },
        events: {
          total: totalEvents,
          upcoming: upcomingEvents
        }
      },
      recentActivities: {
        dojos: recentDojos,
        students: recentStudents,
        events: recentEvents
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get pending approvals
router.get('/pending-approvals', auth, async (req, res) => {
  try {
    const [pendingDojos, pendingStudents] = await Promise.all([
      Dojo.find({ status: 'pending' })
        .sort({ createdAt: -1 })
        .select('name ownerInfo.name ownerInfo.email createdAt'),
      Student.find({ status: 'pending' })
        .sort({ createdAt: -1 })
        .select('personalInfo.firstName personalInfo.lastName personalInfo.email createdAt')
    ]);
    
    res.json({
      pendingDojos,
      pendingStudents
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new admin (super admin only)
router.post('/create', auth, async (req, res) => {
  try {
    // Check if current admin is super admin
    const currentAdmin = await Admin.findById(req.adminId);
    if (currentAdmin.role !== 'super_admin') {
      return res.status(403).json({ error: 'Only super admins can create new admins' });
    }
    
    const { name, email, password, role = 'admin' } = req.body;
    
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
      role
    });
    
    await admin.save();
    
    res.status(201).json({
      message: 'Admin created successfully',
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

// Get all admins (super admin only)
router.get('/', auth, async (req, res) => {
  try {
    const currentAdmin = await Admin.findById(req.adminId);
    if (currentAdmin.role !== 'super_admin') {
      return res.status(403).json({ error: 'Access denied' });
    }
    
    const admins = await Admin.find().select('-password');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update admin role (super admin only)
router.patch('/:id/role', auth, async (req, res) => {
  try {
    const currentAdmin = await Admin.findById(req.adminId);
    if (currentAdmin.role !== 'super_admin') {
      return res.status(403).json({ error: 'Only super admins can update roles' });
    }
    
    const { role } = req.body;
    
    const admin = await Admin.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');
    
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    
    res.json({
      message: 'Admin role updated successfully',
      admin
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete admin (super admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const currentAdmin = await Admin.findById(req.adminId);
    if (currentAdmin.role !== 'super_admin') {
      return res.status(403).json({ error: 'Only super admins can delete admins' });
    }
    
    if (req.params.id === req.adminId) {
      return res.status(400).json({ error: 'Cannot delete yourself' });
    }
    
    const admin = await Admin.findByIdAndDelete(req.params.id);
    
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }
    
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logout (invalidate token - in a real app, you'd maintain a blacklist)
router.post('/logout', auth, async (req, res) => {
  try {
    // In a real application, you would add the token to a blacklist
    // For now, we'll just return success
    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
