const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');

const mongoose = require('./config/database.config');
const login = require('./routes/login.routes');
const signup = require('./routes/signup.routes');
const admin = require('./routes/admin.routes.js');
const app = express();

mongoose.connection.on('connected', () => {
  console.log('Database Connection has been made');
});
mongoose.connection.on('error', () => {
  console.log('Database connection has error');
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, Authorization, x-access-token, user-email"
  );
  next();
});


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));



app.set('secretKey', 'gateScholar2020');

app.use('/gatescholar', signup);

app.use('/gatescholar/admin', admin);

app.use('/gatescholar', validateUsers, login);
function validateUsers(req, res, next) {

  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      console.log(req.headers)
      res.json({ status: "error", message: err.message, data: null });
    } else {
console.log("from backend", req.headers['x-access-token'])
      req.body.info = decoded.id;
      req.userData=decoded.id;

      next();
    }
  }
  );

}



let port = 5000;
app.listen(port, () => {
  console.log('Listening on port 5000................');
});