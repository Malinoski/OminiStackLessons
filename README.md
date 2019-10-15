# Ownistack exercices

All documentation use macOS

## 1. Backend

### 1.1. Environment 

* Install homebrew:
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* Install node:
```
brew install node@10.16.3
```

* Check if has npm (if not, install it):
```
npm -v
```

* Install yarn (plus for other packages):
```
brew install yarn --ignore-dependencies
```

* Install properties file package:
```
npm install properties-reader
```

* Intall package for image upload:
```
yarn add multer
```

* To create basic structure:

```
cd backend
yarn init -y
```

### 1-2. Install and configure Visual Studio Code

* Install ". code": Open the vs and > press command + shift + p > Type "Install code command in PATH"

* Install nodemon for not stop and start node every changes (only for development):
```
yarn add nodemon -D
```

* And add this to package.json:
```
"scripts": {
  "dev": "nodemon src/server.js"
},
```

* Install express packages. Press command + shift + p > Type "Toggle integrated terminal" and execute:
```
yarn add express
```

* Open the project in vs
```
code .
```

### 1-3. Instal and configure MongoDB

*The step below is local, but you can use an online database, like MongoDB Atlas with 500gb free space (Database access - create a new user; Network access - allow from anywhere; Cluster - Connect to you application;*

* Install mongoose:
```
yarn add mongoose
```

* To run:
```
mongod --config /usr/local/etc/mongod.conf &
```

* To connect:
```
mongo

# Create app user
db.createUser(
  {
    user: "ownistack",
    pwd: "fBePy4spvzcbp6HY",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```

### 1-4. Run backend

* Start mongo db
```
mongod --config /usr/local/etc/mongod.conf &
```

* To run in dev (node.js):
```
cd backend
yarn dev
```

* To run in production (node.js):
```
node src/server.js
```

### 1-5. Tests (Insomnia):

* Install https://insomnia.rest, open it and create the folloing tests:

* Test session store (any email or string. Just put and you are logged)
```
Method: POST
Url: http://localhost:3333/session
Body (json): 
{
  "email": "iuri@xom.xom"
}
```

* Test spot store (post a new spot, then, check if the image was saved in 'backend/uploads')
```
Method: POST
Url: http://localhost:3333/spots
Multpart:
  thumbnail: <upload an image>
  company: martin
  price: 50
  techs: ReactJS, React Native, Node.js
Header:
  user: <put here any valid user id>
```

* Test spot index (list spots, filtered by a technology)
```
Method: GET
Query:
  tech: ReactJS

P.s.: You can access directly by http://localhost:3333/spots?tech=ReactJS
```

* Test dashboard show (list all spots from a user)
```
Method: GET
Header:
  user_id: <put here any valid user id>
```

* Test booking store (booking a spot with a specific users)
```
Method: POST
Url: http://localhost:3333/spots/<put here any valid spot id>/bookings
Body (json):
  {
	  "date": "03 de outubro"
  }
Header:
  user_id: <put here any valid user id>  
```

## 2. Frontend

### 2.1. Environment 

* To create basic structure:
```
yarn create react-app frontend
``` 

### 2.2 Run
```
cd frontend
yarn start
```