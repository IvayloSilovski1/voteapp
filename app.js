const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// db config
require('./config/db');


// init app
const app = express();

const vote = require('./routes/vote');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// enable cors
app.use(cors());

app.use('/vote', vote);

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000...')
});