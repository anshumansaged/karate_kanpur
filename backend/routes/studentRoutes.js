const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Dojo = require('../models/Dojo');
const { auth } = require('../middleware/auth');

// Get all students (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const { status, dojo, city, state } = req.query;
    let filter = {};
    
    if (status) filter.status = status;
    if (dojo) filter.assignedDojo = dojo;
    if (city) filter['address.city'] = new RegExp(city, 'i');
    if (state) filter['address.state'] = new RegExp(state, 'i');
    
    const students = await Student.find(filter)
      .populate('assignedDojo', 'name location.city')
      .populate('dojoPreference.preferredDojo', 'name location.city')
      .sort({ createdAt: -1 });
      
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get student by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate('assignedDojo')
      .populate('dojoPreference.preferredDojo');
      
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register new student
router.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    
    res.status(201).json({
      message: 'Student registration submitted successfully',
      student: student
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    res.status(400).json({ error: error.message });
  }
});

// Update student (admin only)
router.patch('/:id', auth, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Approve student (admin only)
router.patch('/:id/approve', auth, async (req, res) => {
  try {
    const { assignedDojoId } = req.body;
    
    // Verify dojo exists and is approved
    if (assignedDojoId) {
      const dojo = await Dojo.findOne({ _id: assignedDojoId, status: 'approved' });
      if (!dojo) {
        return res.status(400).json({ error: 'Invalid or unapproved dojo' });
      }
    }
    
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { 
        status: 'approved',
        assignedDojo: assignedDojoId,
        joinDate: new Date()
      },
      { new: true }
    ).populate('assignedDojo');
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    // Update dojo student count
    if (assignedDojoId) {
      await Dojo.findByIdAndUpdate(assignedDojoId, {
        $inc: { studentsCount: 1 }
      });
    }
    
    res.json({
      message: 'Student approved and assigned successfully',
      student: student
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Reject student (admin only)
router.patch('/:id/reject', auth, async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { status: 'rejected' },
      { new: true }
    );
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json({
      message: 'Student application rejected',
      student: student
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Assign student to dojo (admin only)
router.patch('/:id/assign-dojo', auth, async (req, res) => {
  try {
    const { dojoId } = req.body;
    
    // Verify dojo exists and is approved
    const dojo = await Dojo.findOne({ _id: dojoId, status: 'approved' });
    if (!dojo) {
      return res.status(400).json({ error: 'Invalid or unapproved dojo' });
    }
    
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { assignedDojo: dojoId },
      { new: true }
    ).populate('assignedDojo');
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    res.json({
      message: 'Student assigned to dojo successfully',
      student: student
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add progress note (admin only)
router.post('/:id/progress', auth, async (req, res) => {
  try {
    const { note, instructor } = req.body;
    
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    student.progressNotes.push({
      date: new Date(),
      note: note,
      instructor: instructor
    });
    
    await student.save();
    
    res.json({
      message: 'Progress note added successfully',
      student: student
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Record attendance (admin only)
router.post('/:id/attendance', auth, async (req, res) => {
  try {
    const { classType, duration } = req.body;
    
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    student.attendance.push({
      date: new Date(),
      classType: classType,
      duration: duration || 90 // default 90 minutes
    });
    
    await student.save();
    
    res.json({
      message: 'Attendance recorded successfully',
      student: student
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get students by dojo
router.get('/dojo/:dojoId', auth, async (req, res) => {
  try {
    const students = await Student.find({
      assignedDojo: req.params.dojoId,
      status: 'approved'
    }).sort({ joinDate: -1 });
    
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search students
router.get('/search/:query', auth, async (req, res) => {
  try {
    const query = req.params.query;
    const students = await Student.find({
      $or: [
        { 'personalInfo.firstName': new RegExp(query, 'i') },
        { 'personalInfo.lastName': new RegExp(query, 'i') },
        { 'personalInfo.email': new RegExp(query, 'i') },
        { 'address.city': new RegExp(query, 'i') }
      ]
    }).populate('assignedDojo', 'name location.city');
    
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete student (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    
    // Update dojo student count if student was assigned
    if (student.assignedDojo) {
      await Dojo.findByIdAndUpdate(student.assignedDojo, {
        $inc: { studentsCount: -1 }
      });
    }
    
    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
