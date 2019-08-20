//dependencies 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const membersController = require('./controllers/members');
const port = 3003;

//middleware
app.use(cors());

app.use(express.json());
app.use('/members', membersController);


//mongoose connections
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => 
    console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/members', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

//listener
app.listen(PORT, () => {
    console.log('LISTENING')
})
