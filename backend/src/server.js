// Inport express
const express = require('express');
const mongoose = require('mongoose'); // for mongodb
const routes = require('./routes'); // ower routers
const property = require('properties-reader');

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

// Tell to app know json body requests
app.use(express.json());

// Add ower routes
app.use(routes);

// Define a port to listen
app.listen(3333);