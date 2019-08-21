const express = require('express')
const donors = express.Router();
const Donors = require('../models/donorSchema.js')

//index
donors.get('/', (req, res) => {
    Donors.find({}, (err, foundDonors) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(foundDonors)
    })
})

//create
donors.post('/', (req, res) => {
    Donors.create(req.body, (error, createdDonors) => {
        if (error) {
            res.status(400).json({error: error.message});
        }
        res.status(200).send(createdDonors);
    })
})


//delete
donors.delete('/:id', (req, res) => {
    Donors.findByIdAndRemove(req.params.id, (err, deletedDonors) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedDonors)
    })
})

//update
donors.put('/:id', (req, res) => {
    Donors.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDonors) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(updatedDonors)
    })
})


module.exports = donors;