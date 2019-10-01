# Backend

## 1. Ambiente de desenvolvimento macOS (ref)

#### Install homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### Install node
```
brew install node@10.16.3
```

#### Install npm
```
npm -v
```

#### Install yarn (plus for other packages)
```
brew install yarn --ignore-dependencies
```

#### Install Visual Studio Code: https://code.visualstudio.com/

#### Install ". code"
Open vscode > press command + shift + p > Type "Install code command in PATH"

#### Install nodemon for not stop and start node every changes (only for development)
```
yarn add nodemon -D
```

#### And add this to package.json:
```
"scripts": {
  "dev": "nodemon src/server.js"
},
``` 

#### Install mongoose (for MongoDB) - use this url to test mongodb connections: http://portquiz.net:27017/
```
yarn add mongoose
```
Remember to add the correct user and pass at mongoose.connect(...) at server.js

#### Install insomnia to test requests: https://insomnia.rest 

## 2. Basic

#### Root structure
```
mkdir OmniStack
cd OmniStack
```

#### Backend structure
```
mkdir backend
cd backend
yarn init -y
code .
```

#### Install express packages. Press command + shift + p > Type "Toggle integrated terminal" and execute:
```
yarn add express
```

#### Create the src folder
```
mkdir src
```

#### Create the first service
```
cd src
vim server.js
```
```
// Inport express
const express = require('express');

// Create an app
const app = express();

// Define routes with GET, POST, PUT, DELETE (ex.: localhost:333/hellotext)

app.get('/hellotext', (req, res) => {
    return res.send('hello world!');
})

app.get('/hellojson', (req, res) => {
    return res.json({message: 'hello world!'});
})

// req.query is used to get params like like users?idade=20
app.get('/users', (req, res) => {
    return res.json({idade: req.query.idade});
})

// req.query is also used to get params in body
app.post('/users', (req, res) => {
    return res.json({message: req.query.idade});
})

// req.param is used to get uri param on format like users/3
app.put('/users/:id', (req, res) => {
    return res.json({message: req.params.id});
})

// Define a port to listen
app.listen(3333);
```

#### Create a document oriented database: 
You can create on in MongoDB Atlas (free with 500gb space). Database access - create a new user; Network access - allow from anywhere; Cluster - Connect to you application; 

#### Execute for dev
```
yarn dev
```

#### Or production
```
node src/server.js
```

#### Test in insomnia and via browser (http://localhost:3333/)