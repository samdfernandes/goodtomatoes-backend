const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    friends: [{ type: String }],
    password: { type: String, require: true },
    picture: { type: String }
})

// memberSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// memberSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('Member', memberSchema);

