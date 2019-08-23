const express = require('express');
const reviews = express.Router();
const Reviews = require('../models/reviewSchema');

//index
reviews.get('/', (req, res) => {
  Reviews.find({}, (err, foundReviews) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReviews);
  });
});

//Get By userID
reviews.get('/byUser/:id', (req, res) => {
  Reviews.find({createdByID: req.params.id}, (err, foundReviews) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundReviews);
  });
});

//Get By imdbID
reviews.get('/:id', (req, res) => {
  Reviews.find({imdbID: req.params.id}, (err, foundReviews) => {
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