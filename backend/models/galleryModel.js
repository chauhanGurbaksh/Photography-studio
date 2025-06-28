const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Wedding', 'Portrait', 'Event', 'Product', 'Nature'],
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Gallery', gallerySchema);
