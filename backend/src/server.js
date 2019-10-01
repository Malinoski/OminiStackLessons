// Inport express
const express = require('express');
const routes = require('./routes'); // ower routers

// Create an app
const app = express();

// Tell to app know json body requests
app.use(express.json());

// Add ower routes
app.use(routes);

// Define a port to listen
app.listen(3333);

