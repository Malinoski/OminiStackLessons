# Backend

## 1. Environment (macOS)

Install homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Install node
```
brew install node@10.16.3
```

Check if has npm (if not, install it)
```
npm -v
```

Install yarn (plus for other packages)
```
brew install yarn --ignore-dependencies
```

Install properties file package
```
npm install properties-reader
```

Intall package for image upload
```
yarn add multer
```

## 2. (Optional) Install and configure Visual Studio Code to view the code better

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

Install express packages. Press command + shift + p > Type "Toggle integrated terminal" and execute:
```
yarn add express
```

Open the project in vs
```
code .
```

## 3. MongoDB

Install mongoose
```
yarn add mongoose
```

### MongoDB Atlas
You can create a database on in MongoDB Atlas (free with 500gb space): Database access - create a new user; Network access - allow from anywhere; Cluster - Connect to you application; 

### Local
```
# Run
mongod --config /usr/local/etc/mongod.conf &

# Connect
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

## 4. Run

```
cd backend
yarn dev

# note: for production use:
node src/server.js
```

## 5. Tests (Insomnia):

Install https://insomnia.rest, open it and create the folloing tests:

### Session store (any email or string. Just put and you are logged)
```
Method: POST
Url: http://localhost:3333/session
Body (json): 
{
  "email": "iuri@xom.xom"
}
```

### Spot store (post a new spot, then, check if the image was saved in 'backend/uploads')
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

### Spot index (list spots, filtered by a technology)
```
Method: GET
Query:
  tech: ReactJS

P.s.: You can access directly by http://localhost:3333/spots?tech=ReactJS
```

Dashboard show (list all spots from a user)
```
Method: GET
Header:
  user_id: <put here any valid user id>
```

### Booking store (booking a spot with a specific users)
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

## 6. Appendix

Basic basic structure was created as below:

```
# Root structure
mkdir OmniStack
cd OmniStack
mkdir backend
cd backend

# Init
yarn init -y

```