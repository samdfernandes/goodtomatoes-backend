//dependencies

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const membersController = require('./controllers/members');
const reviewsController = require('./controllers/reviews');
const userController = require('./controllers/user')
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/members'

//cors
const whitelist = ['http://localhost:3000', 'http://good_tomatoes.surge.sh/'];
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
app.use('/reviews', reviewsController);
app.use('/users', userController);


//mongoose connections
mongoose.connection.on('error', err =>
  console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

// SEED ROUTE ////////////////////////////////////
const seed1 = require('./controllers/seedMember');
const seed = require('./controllers/seedReviews');

///// Uncomment the line below this to seed the data from the seedMember file. Then go to /seedMembers. Comment out line when done.
const memberSeed = require('./models/memberSchema');
const reviewSeed = require('./models/reviewSchema');

//seeds the members
app.get('/seedMembers', (req, res) => {
  memberSeed.create(seed1, (err, createdMembers) => {
    console.log(createdMembers);
    res.redirect('/');
  });
});

//seeds the reviews
app.get('/seedReviews', (req, res) => {
  reviewSeed.create(seed, (err, createdReviews) => {
    console.log(createdReviews);
    res.redirect('/');
  });
});

/////////////////////////////////////////////////

//listener
app.listen(PORT, () => {
  console.log('LISTENING');
});
