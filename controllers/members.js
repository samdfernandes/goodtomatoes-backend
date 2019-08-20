const express = require('express')
const members = express.Router();
const Members = require('../models/data.js')

//index
members.get('/', (req, res) => {
    Members.find({}, (err, foundMembers) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundMembers)
    })
})

//create
members.post('/', (req, res) => {
    Members.create(req.body, (error, createdMember) => {
        if (error) {
            res.status(400).json({error: error.message});
        }
        res.status(200).send(createdMember);
    })
})


//delete
members.delete('/:id', (req, res) => {
    Members.findByIdAndRemove(req.params.id, (err, deletedMembers) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedMembers)
    })
})

//update
members.put('/:id', (req, res) => {
    Members.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedMembers) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(updatedMembers)
    })
})


module.exports = members;