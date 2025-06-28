const mongoose = require('mongoose');

// Define schema
const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    enum: ['Wedding', 'Portrait', 'Event', 'Product', 'Nature'],
    required: true
  },
  message: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Safe export to avoid OverwriteModelError
module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
