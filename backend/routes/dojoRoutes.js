const express = require('express');
const router = express.Router();
const Dojo = require('../models/Dojo');
const jwt = require('jsonwebtoken');
const { auth } = require('../middleware/auth');

// Get all dojos
router.get('/', async (req, res) => {
  try {
    const { status, city, state } = req.query;
    let filter = {};
    
    if (status) filter.status = status;
    if (city) filter['location.city'] = new RegExp(city, 'i');
    if (state) filter['location.state'] = new RegExp(state, 'i');
    
    const dojos = await Dojo.find(filter).sort({ createdAt: -1 });
    res.json(dojos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get dojo by ID
router.get('/:id', async (req, res) => {
  try {
    const dojo = await Dojo.findById(req.params.id);
    if (!dojo) {
      return res.status(404).json({ error: 'Dojo not found' });
    }
    res.json(dojo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register new dojo
router.post('/register', async (req, res) => {
  try {
    const dojo = new Dojo(req.body);
    await dojo.save();
    res.status(201).json({
      message: 'Dojo registration submitted successfully',
      dojo: dojo
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    res.status(400).json({ error: error.message });
  }
});

// Update dojo (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    const dojo = await Dojo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!dojo) {
      return res.status(404).json({ error: 'Dojo not found' });
    }
    
    res.json(dojo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Approve dojo (admin only)
router.patch('/:id/approve', auth, async (req, res) => {
  try {
    const dojo = await Dojo.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    
    if (!dojo) {
      return res.status(404).json({ error: 'Dojo not found' });
    }
    
    res.json({
      message: 'Dojo approved successfully',
      dojo: dojo
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Reject dojo (admin only)
router.patch('/:id/reject', auth, async (req, res) => {
  try {
    const dojo = await Dojo.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    );
    
    if (!dojo) {
      return res.status(404).json({ error: 'Dojo not found' });
    }
    
    res.json({
      message: 'Dojo rejected',
      dojo: dojo
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete dojo (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const dojo = await Dojo.findByIdAndDelete(req.params.id);
    
    if (!dojo) {
      return res.status(404).json({ error: 'Dojo not found' });
    }
    
    res.json({ message: 'Dojo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get dojos by location
router.get('/location/:city', async (req, res) => {
  try {
    const dojos = await Dojo.find({
      'location.city': new RegExp(req.params.city, 'i'),
      status: 'approved',
      isActive: true
    });
    res.json(dojos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search dojos
router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const dojos = await Dojo.find({
      $or: [
        { name: new RegExp(query, 'i') },
        { 'location.city': new RegExp(query, 'i') },
        { 'location.state': new RegExp(query, 'i') },
        { 'instructor.name': new RegExp(query, 'i') }
      ],
      status: 'approved',
      isActive: true
    });
    res.json(dojos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
