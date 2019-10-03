// This file is used to modularizate the routes

const express = require('express');

// Fileupload
const multer = require('multer'); 
uploadConfig = require('./config/upload');
const upload  = multer(uploadConfig);

// Controllers
const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const routes = express.Router();

// Define routes with GET, POST, PUT, DELETE (ex.: localhost:333/hellotext)

/* 
// Test from browser http://localhost:3333/hellov1
// This example return a plain text
routes.get('/hellov1', (req, res) => {
    return res.send('hello world!');
})

// Test from browser http://localhost:3333/hellov2
// This example return a json
routes.get('/hellov2', (req, res) => {
    return res.json({message: 'hello world!'});
})

// Test from browser http://localhost:3333/usersv0?idade=20
// This example get the params at url and return it in json
routes.get('/usersv0', (req, res) => {
    return res.json({idade: req.query.idade});
})

// Test on insomnia, with param at body, ex.: "idade=21"
// req.query get param at URL or in body
routes.post('/usersv1', (req, res) => {
    return res.json({message: req.query.idade});
})

// Test on insomnia, with json param at body, ex.: { "name": "iuri"}
// This example receive a json and response the same json
routes.post('/usersv2', (req, res) => {
    return res.json(req.body);
})

// Test on insomnia, with the following url: http://localhost:3333/users/2 
// req.param is used to get uri param on format like users/3
// This example receive a param at url and can get params at body ex.: "idade=21"
routes.put('/usersv3/:id', (req, res) => {
    return res.json({message: req.params.id});
})
*/

routes.post('/sessions', SessionController.store);
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store); //  upload.single if for one file

module.exports = routes;
