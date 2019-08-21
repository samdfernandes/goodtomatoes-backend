const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    text: { type: String },
    author: { type: String },
    movieId: [{ type: String }]
})

module.exports = mongoose.model('Review', reviewSchema)

