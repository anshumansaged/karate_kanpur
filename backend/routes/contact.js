const express = require('express');
const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required' 
      });
    }

    // For now, just log the contact form data
    // In a real application, you might:
    // - Save to database
    // - Send email notification
    // - Send auto-reply email
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date()
    });

    res.status(200).json({
      message: 'Contact form submitted successfully',
      data: {
        name,
        email,
        subject,
        timestamp: new Date()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to submit contact form' 
    });
  }
});

module.exports = router;
