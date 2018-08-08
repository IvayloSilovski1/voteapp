const mongoose = require('mongoose');

// map global promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://IvayloSilovski:ivo_rum951753@ds117158.mlab.com:17158/voteapp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));