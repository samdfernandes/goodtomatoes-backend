const mongoose = require('mongoose')

const donorSchema = mongoose.Schema({
    name: { type: String },
    username: { type: String },
    email: { type: String }
})

module.exports = mongoose.model('Donor', donorSchema)