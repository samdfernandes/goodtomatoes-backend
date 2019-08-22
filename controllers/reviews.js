const express = require('express');
const reviews = express.Router();
const Reviews = require('../models/reviewSchema');

//Get By ID
reviews.get('/:id', (req, res) => {
  Members.find({}, (err, foundMembers) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundMembers);
  });
});

//index
reviews.get('/', (req, res) => {
  Reviews.find({}, (err, foundReviews) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReviews);
  });
});

//create
reviews.post('/', (req, res) => {
  Reviews.create(req.body, (error, createdReview) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdReview);
  });
});

//delete
reviews.delete('/:id', (req, res) => {
  Reviews.findByIdAndRemove(req.params.id, (err, deletedReviews) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedReviews);
  });
});

//update
reviews.put('/:id', (req, res) => {
  Reviews.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedReviews) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedReviews);
    }
  );
});

module.exports = reviews