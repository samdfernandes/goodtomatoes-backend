const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    friends: [{ type: String }],
    password: { type: String, require: true },
    picture: { type: String }
})

module.exports = mongoose.model('Member', memberSchema)

