//dependencies

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const membersController = require('./controllers/members');
const donorsController =require('./controllers/donors')
const PORT = 3003;
const cors = require('cors');

//cors
const whitelist = [
  'http://localhost:3000',
  'https://fathomless-sierra-68956.herokuapp.com'
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

//middleware
app.use(cors());

app.use(express.json());
app.use('/members', membersController);
app.use('/donors', donorsController)

//mongoose connections
mongoose.connection.on('error', err =>
  console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect('mongodb://localhost:27017/members', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

// SEED ROUTE ////////////////////////////////////
const seed = require('./controllers/seedMember');
const seed2 = require('./controllers/seedDonor');

///// Uncomment the line below this to seed the data from the seedMember file. Then go to /seedMembers. Comment out line when done. 
const memberSeed = require('./models/memberSchema')
const donorSeed = require('./models/donorSchema')

//seeds the members
app.get('/seedMembers', (req, res) => {
  memberSeed.create(seed, (err, createdMembers) => {
    console.log(createdMembers);
    res.redirect('/');
  });
});

//seeds the donors
app.get('/seedDonors', (req, res) => {
  donorSeed.create(seed, (err, createdDonors) => {
    console.log(createdDonors);
    res.redirect('/');
  });
});

/////////////////////////////////////////////////

//listener
app.listen(PORT, () => {
  console.log('LISTENING');
});
