
const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  createdByID: { type: String, required: true },
  imdbID: { type: String },
  poster: { type: String },
  movieTitle: { type: String },
  title: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  reviewNotes: { type: String }
});

module.exports = mongoose.model('Review', reviewSchema);

