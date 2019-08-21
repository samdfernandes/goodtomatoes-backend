const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  createdBy: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewNotes: { type: String }
});

module.exports = mongoose.model('Review', reviewSchema);
