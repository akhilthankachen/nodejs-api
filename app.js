const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ApiAuth');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/users', require('./routes/users'));

//Start the server
const port = process.env.port || 3000;
app.listen(3000);
console.log('Server listening at '+port);

