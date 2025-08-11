const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Camp', 'Tournament', 'Seminar', 'Grading', 'Workshop', 'Competition'],
    required: true
  },
  dateTime: {
    start: {
      type: Date,
      required: true
    },
    end: {
      type: Date,
      required: true
    }
  },
  location: {
    venue: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  organizer: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String,
    dojo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dojo'
    }
  },
  instructor: {
    name: {
      type: String,
      required: true
    },
    rank: String,
    bio: String,
    achievements: [String]
  },
  eligibility: {
    minAge: {
      type: Number,
      default: 0
    },
    maxAge: Number,
    ranks: [String],
    experience: String, // e.g., "Minimum 2 years"
    gender: {
      type: String,
      enum: ['All', 'Male', 'Female'],
      default: 'All'
    }
  },
  capacity: {
    max: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      default: 0
    }
  },
  fees: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'INR'
    },
    earlyBird: {
      amount: Number,
      deadline: Date
    },
    includes: [String] // e.g., ["Meals", "Accommodation", "Certificate"]
  },
  registration: {
    isOpen: {
      type: Boolean,
      default: true
    },
    deadline: Date,
    requirements: [String]
  },
  participants: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    registrationDate: {
      type: Date,
      default: Date.now
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'refunded'],
      default: 'pending'
    },
    attendance: {
      type: Boolean,
      default: false
    }
  }],
  schedule: [{
    time: String,
    activity: String,
    duration: Number, // in minutes
    instructor: String
  }],
  requirements: {
    equipment: [String],
    uniform: String,
    documents: [String]
  },
  media: {
    images: [String],
    videos: [String],
    brochure: String
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'ongoing', 'completed', 'cancelled'],
    default: 'draft'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  results: [{
    category: String,
    position: Number,
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
    },
    score: Number,
    notes: String
  }]
}, {
  timestamps: true
});

// Virtual for event duration
eventSchema.virtual('duration').get(function() {
  return this.dateTime.end - this.dateTime.start;
});

// Virtual for available spots
eventSchema.virtual('availableSpots').get(function() {
  return this.capacity.max - this.capacity.current;
});

// Virtual for registration status
eventSchema.virtual('registrationStatus').get(function() {
  if (!this.registration.isOpen) return 'closed';
  if (this.registration.deadline && new Date() > this.registration.deadline) return 'expired';
  if (this.capacity.current >= this.capacity.max) return 'full';
  return 'open';
});

// Indexing for better search performance
eventSchema.index({ type: 1 });
eventSchema.index({ 'dateTime.start': 1 });
eventSchema.index({ 'location.city': 1 });
eventSchema.index({ status: 1 });
eventSchema.index({ 'registration.isOpen': 1 });

module.exports = mongoose.model('Event', eventSchema);
