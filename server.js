//dependencies 

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const membersController = require('./controllers/members');
const PORT = 3003;

//cors
const whitelist = ['http://localhost:3000', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

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
