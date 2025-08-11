const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  personalInfo: {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
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
    dateOfBirth: {
      type: Date,
      required: true
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true
    },
    emergencyContact: {
      name: {
        type: String,
        required: true
      },
      relationship: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
    }
  },
  address: {
    street: String,
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: String,
    country: {
      type: String,
      default: 'India'
    }
  },
  dojoPreference: {
    preferredDojo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dojo'
    },
    preferredInstructor: String,
    anyAvailable: {
      type: Boolean,
      default: false
    }
  },
  martialArtsBackground: {
    previousExperience: {
      type: Boolean,
      default: false
    },
    styles: [String],
    yearsOfExperience: {
      type: Number,
      default: 0
    },
    currentRank: String,
    previousInstructors: [String]
  },
  healthInfo: {
    medicalConditions: [String],
    medications: [String],
    injuries: [String],
    doctorClearance: {
      type: Boolean,
      default: false
    },
    parentalConsent: {
      type: Boolean,
      default: false // Required for minors
    }
  },
  goals: {
    primaryGoals: [String],
    fitnessLevel: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    commitmentLevel: {
      type: String,
      enum: ['Casual', 'Regular', 'Intensive']
    }
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'active', 'inactive'],
    default: 'pending'
  },
  assignedDojo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dojo'
  },
  joinDate: Date,
  currentRank: {
    type: String,
    default: 'White Belt'
  },
  progressNotes: [{
    date: Date,
    note: String,
    instructor: String
  }],
  attendance: [{
    date: Date,
    classType: String,
    duration: Number // in minutes
  }],
  fees: {
    monthlyFee: Number,
    paidUntil: Date,
    paymentHistory: [{
      amount: Number,
      paymentDate: Date,
      method: String,
      transactionId: String
    }]
  }
}, {
  timestamps: true
});

// Virtual for age calculation
studentSchema.virtual('age').get(function() {
  return Math.floor((Date.now() - this.personalInfo.dateOfBirth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
});

// Virtual for full name
studentSchema.virtual('fullName').get(function() {
  return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
});

// Indexing for better search performance
studentSchema.index({ 'personalInfo.email': 1 });
studentSchema.index({ status: 1 });
studentSchema.index({ assignedDojo: 1 });
studentSchema.index({ 'personalInfo.firstName': 1, 'personalInfo.lastName': 1 });

module.exports = mongoose.model('Student', studentSchema);
