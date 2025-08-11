const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const { auth } = require('../middleware/auth');

// Get all events (public)
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      location, 
      startDate, 
      endDate, 
      status = 'published',
      limit = 20,
      page = 1 
    } = req.query;
    
    let filter = { status };
    
    if (category) filter.category = category;
    if (location) filter['location.city'] = new RegExp(location, 'i');
    
    // Date range filter
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) filter.date.$lte = new Date(endDate);
    }
    
    const skip = (page - 1) * limit;
    
    const events = await Event.find(filter)
      .sort({ date: 1 })
      .limit(parseInt(limit))
      .skip(skip);
      
    const total = await Event.countDocuments(filter);
    
    res.json({
      events,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get upcoming events (public)
router.get('/upcoming', async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    
    const events = await Event.find({
      status: 'published',
      date: { $gte: new Date() }
    })
    .sort({ date: 1 })
    .limit(parseInt(limit));
    
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get event by ID (public)
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new event (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    
    res.status(201).json({
      message: 'Event created successfully',
      event: event
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update event (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({
      message: 'Event updated successfully',
      event: event
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Publish event (admin only)
router.patch('/:id/publish', auth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: 'published', publishedAt: new Date() },
      { new: true }
    );
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({
      message: 'Event published successfully',
      event: event
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Cancel event (admin only)
router.patch('/:id/cancel', auth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled', cancelledAt: new Date() },
      { new: true }
    );
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({
      message: 'Event cancelled successfully',
      event: event
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Register for event
router.post('/:id/register', async (req, res) => {
  try {
    const {
      participantName,
      email,
      phone,
      dojo,
      beltRank,
      emergencyContact,
      medicalInfo,
      additionalNotes
    } = req.body;
    
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    if (event.status !== 'published') {
      return res.status(400).json({ error: 'Event is not open for registration' });
    }
    
    if (event.date < new Date()) {
      return res.status(400).json({ error: 'Cannot register for past events' });
    }
    
    if (event.registrations.length >= event.maxParticipants) {
      return res.status(400).json({ error: 'Event is full' });
    }
    
    // Check if already registered
    const existingRegistration = event.registrations.find(
      reg => reg.email === email
    );
    
    if (existingRegistration) {
      return res.status(400).json({ error: 'Already registered for this event' });
    }
    
    // Add registration
    event.registrations.push({
      participantName,
      email,
      phone,
      dojo,
      beltRank,
      emergencyContact,
      medicalInfo,
      additionalNotes,
      registrationDate: new Date(),
      status: 'confirmed'
    });
    
    await event.save();
    
    res.json({
      message: 'Registration successful',
      registrationId: event.registrations[event.registrations.length - 1]._id
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get event registrations (admin only)
router.get('/:id/registrations', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({
      eventTitle: event.title,
      totalRegistrations: event.registrations.length,
      maxParticipants: event.maxParticipants,
      registrations: event.registrations
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cancel registration
router.delete('/:id/register/:registrationId', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    const registrationIndex = event.registrations.findIndex(
      reg => reg._id.toString() === req.params.registrationId
    );
    
    if (registrationIndex === -1) {
      return res.status(404).json({ error: 'Registration not found' });
    }
    
    event.registrations.splice(registrationIndex, 1);
    await event.save();
    
    res.json({
      message: 'Registration cancelled successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search events
router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const events = await Event.find({
      status: 'published',
      $or: [
        { title: new RegExp(query, 'i') },
        { description: new RegExp(query, 'i') },
        { category: new RegExp(query, 'i') },
        { 'location.city': new RegExp(query, 'i') }
      ]
    }).sort({ date: 1 });
    
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get events by category
router.get('/category/:category', async (req, res) => {
  try {
    const events = await Event.find({
      category: req.params.category,
      status: 'published',
      date: { $gte: new Date() }
    }).sort({ date: 1 });
    
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete event (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
