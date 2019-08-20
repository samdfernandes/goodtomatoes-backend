const mongoose = require('mongoose')

const memeberSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    bio: { type: String },
    memberPic: { type: String },
    medicalNotes: { type: String },
    skills: [{ type: String }],
    ableToWork: { type: Boolean },
    needs: [{ type: String }]
})

module.exports = mongoose.model('Donor', memeberSchema)