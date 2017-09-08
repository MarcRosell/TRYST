[![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)
![Monogoose](https://github.com/MarioTerron/logo-images/blob/master/logos/mongoose.png)
![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)
[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) 
[![HTML5,CSS3 and JS](https://github.com/FransLopez/logo-images/blob/master/logos/html5-css3-js.png)](http://www.w3.org/) 
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
![Materializecss](https://pbs.twimg.com/profile_images/532662364613525504/GN559Lfb_reasonably_small.png)

# [Suffragium](https://suffragium.herokuapp.com/#!/)

---

## Installation

You need to have installed [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/)

---

### Configuration `env` file

You should create an **.env** file in the project root with the following environment variables configured:

- Port:
  ```
  PORT=3000
  ```

- Mongodb path and database to use:

  ```
  urlDb=mongodb://localhost:27017/NAME_DB
  ```

## API

- `/api` -> Serves the internal data of polls and users.

---

## Built with:

- **Front-end**

    - angular: 1.6.4
      - angular-route: 1.6.6
      - angular-jwt: 0.1.9
    - bower: 1.8.0
    - materialize: 0.100.1
    - font-awesome: 4.7.0
    - socket.io-client: 2.0.3
    
- **Back-end**
  - express: 4.15.4
    - express-jwt: 5.3.0
  - jsonwebtoken: 7.4.3
  - mongoose: 4.11.7
  - passport: 0.4.0
    - passport-jwt: 3.0.0
    - passport-local: 1.0.0
    - passport-local-mongoose: 4.2.1

---

## Author

[Marc Rosell Rectoret](https://github.com/MarcRosell)
