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

## 5. Test (Insomnia):

Install https://insomnia.rest 

Open and config the test
```
Method: POST
Url: http://localhost:3333/users
Json: 
{
  "email": "iuri@xom.xom"
}
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