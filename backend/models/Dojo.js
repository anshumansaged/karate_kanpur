const mongoose = require('mongoose');

const dojoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  instructor: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true
    },
    rank: {
      type: String,
      required: true
    },
    experience: {
      type: Number,
      required: true
    }
  },
  location: {
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      required: true
    },
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  contact: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    website: String
  },
  yearEstablished: {
    type: Number,
    required: true,
    min: 1950,
    max: new Date().getFullYear()
  },
  facilities: {
    type: [String],
    default: []
  },
  classes: [{
    name: String,
    schedule: String,
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels']
    },
    ageGroup: String,
    fee: Number
  }],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  studentsCount: {
    type: Number,
    default: 0
  },
  achievements: [{
    title: String,
    year: Number,
    description: String
  }],
  images: [{
    url: String,
    caption: String
  }],
  socialMedia: {
    facebook: String,
    instagram: String,
    youtube: String
  }
}, {
  timestamps: true
});

// Indexing for better search performance
dojoSchema.index({ 'location.city': 1 });
dojoSchema.index({ 'location.state': 1 });
dojoSchema.index({ status: 1 });
dojoSchema.index({ 'instructor.email': 1 });

module.exports = mongoose.model('Dojo', dojoSchema);
