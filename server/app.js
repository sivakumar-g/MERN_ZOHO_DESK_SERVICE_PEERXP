const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const Request = require('request');

const config = require('./config/database' , { useNewUrlParser: true },  {useUnifiedTopology: true});

// Connect To Database
  mongoose.connect(config.database);


// mongoose.connect('mongodb://localhost/users_text');


// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  // console.log('Database error: '+err);
  console.log('Database error ')
});


// mongoose.connection.close();


const app = express();

const users = require('./routes/users' );
const tickets = require('./routes/tickets' );

// Port Number
const port = 4000;

// CORS Middleware
app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());


// Passport Middleware
app.use(passport.initialize());
 app.use(passport.session());

require('./config/passport')(passport);


app.use('/users', users);
app.use('/tickets', tickets);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
