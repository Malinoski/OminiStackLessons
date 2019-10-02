# Backend

## 1. Environment (macOS)

```
# Install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Install node
brew install node@10.16.3

# Check if has npm (if not, install it)
npm -v

# Install yarn (plus for other packages)
brew install yarn --ignore-dependencies

# Install properties file package
npm install properties-reader
```

## 2. Install Visual Studio Code: https://code.visualstudio.com/

Install ". code": Open the vs and > press command + shift + p > Type "Install code command in PATH"

Install nodemon for not stop and start node every changes (only for development):
```
yarn add nodemon -D
```

And add this to package.json:
```
"scripts": {
  "dev": "nodemon src/server.js"
},
```

#### Install mongoose (for MongoDB) - use this url to test mongodb connections
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

#### Create a document oriented database online as MongoDB Atlas or local: 
First, define desired username and password at config.ini, and use it below:

##### Online (MongoDB Atlas)
You can create a database on in MongoDB Atlas (free with 500gb space): Database access - create a new user; Network access - allow from anywhere; Cluster - Connect to you application; 

##### Local
```
# Run
mongod --config /usr/local/etc/mongod.conf &

# Connect
mongo

# Create app user
db.createUser(
  {
    user: "<user>",
    pwd: "<pass>",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```

#### Run
```
cd backend
yarn dev

# note: for production use:
node src/server.js
```

#### Test in insomnia: 
```
Method: POST
Url: http://localhost:3333/users
Json: 
{
  "email": "iuri@xom.xom"
}
```