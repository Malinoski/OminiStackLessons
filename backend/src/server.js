// Inport express
const express = require('express');

// Create an app
const app = express();

// Tell to app know json body requests
app.use(express.json());

// Define routes with GET, POST, PUT, DELETE (ex.: localhost:333/hellotext)

// Test from browser http://localhost:3333/hellov1
// This example return a plain text
app.get('/hellov1', (req, res) => {
    return res.send('hello world!');
})

// Test from browser http://localhost:3333/hellov2
// This example return a json
app.get('/hellov2', (req, res) => {
    return res.json({message: 'hello world!'});
})

// Test from browser http://localhost:3333/usersv0?idade=20
// This example get the params at url and return it in json
app.get('/usersv0', (req, res) => {
    return res.json({idade: req.query.idade});
})

// Test on insomnia, with param at body, ex.: "idade=21"
// req.query get param at URL or in body
app.post('/usersv1', (req, res) => {
    return res.json({message: req.query.idade});
})

// Test on insomnia, with json param at body, ex.: { "name": "iuri"}
// This example receive a json and response the same json
app.post('/usersv2', (req, res) => {
    return res.json(req.body);
})

// Test on insomnia, with the following url: http://localhost:3333/users/2 
// req.param is used to get uri param on format like users/3
// This example receive a param at url and can get params at body ex.: "idade=21"
app.put('/users/:id', (req, res) => {
    return res.json({message: req.params.id});
})

// Define a port to listen
app.listen(3333);

