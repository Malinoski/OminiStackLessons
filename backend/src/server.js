// Inport express
const express = require('express');
const mongoose = require('mongoose'); // for mongodb
const cors = require('cors');
const routes = require('./routes'); // ower routers
const property = require('properties-reader');
const path = require('path');

// Create an app
const app = express();

/*
// online (MongoDB Atlas)
mongoose.connect('mongodb+srv://ownistack:<pass>@omnistack-cwf0c.mongodb.net/test?retryWrites=true&w=majority',{
    // The code below is used to remove some warning messages
    useNewUrlParser: true,
    useUnifiedTopology: true
});
*/

// localhost
mongoose.connect('mongodb://ownistack:fBePy4spvzcbp6HY@localhost/test?retryWrites=true&w=majority',{
    // The code below is used to remove some warning messages
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// app.use(cors({ origin: 'http://localhost:3333'}));
app.use(cors()); // any host can access the backend server

// Tell to app know json body requests
app.use(express.json());

// Used to return static files (pdf, iamges, etc..0)
// Obs.: __dirname return the current file path
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

// Add ower routes
app.use(routes);

// Define a port to listen
app.listen(3333);