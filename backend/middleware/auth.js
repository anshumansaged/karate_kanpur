const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'kyokushin_jwt_secret_key_2024');
    
    // Get admin from database
    const admin = await Admin.findById(decoded.adminId).select('-password');
    
    if (!admin) {
      return res.status(401).json({ error: 'Invalid token. Admin not found.' });
    }
    
    // Add admin info to request
    req.adminId = admin._id;
    req.adminRole = admin.role;
    req.adminEmail = admin.email;
    req.admin = admin;
    
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token.' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired.' });
    }
    res.status(500).json({ error: 'Server error during authentication.' });
  }
};

// Middleware to check if admin is super admin
const requireSuperAdmin = (req, res, next) => {
  if (req.adminRole !== 'super_admin') {
    return res.status(403).json({ error: 'Access denied. Super admin privileges required.' });
  }
  next();
};

// Middleware to check if admin has specific role or higher
const requireRole = (requiredRole) => {
  return (req, res, next) => {
    const roleHierarchy = {
      'admin': 1,
      'super_admin': 2
    };
    
    const userRoleLevel = roleHierarchy[req.adminRole] || 0;
    const requiredRoleLevel = roleHierarchy[requiredRole] || 0;
    
    if (userRoleLevel < requiredRoleLevel) {
      return res.status(403).json({ 
        error: `Access denied. ${requiredRole} privileges required.` 
      });
    }
    
    next();
  };
};

module.exports = {
  auth,
  requireSuperAdmin,
  requireRole
};
