const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    friends: [{ type: String }],
    likes: [{ type: String }],
    reviews: [{ type: String }],
})

module.exports = mongoose.model('Member', memberSchema)

