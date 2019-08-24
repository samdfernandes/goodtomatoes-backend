const express = require('express');
const user = express.Router();
const User = require('../models/memberSchema');


user.post('/login', (req, res) => {
    console.log('got login', req.body.email)
    User.findOne({email: req.body.email}, (err, foundUser) => {
        console.log(foundUser)
        if (err) {
            res.status(400).json({error: err.message});
        } else if (foundUser.password === req.body.password) {
            console.log('found user', foundUser)
            res.status(200).json('Login valid');
        } else {
            res.status(200).json('Not invaild')
        }
    })
})

module.exports = user;