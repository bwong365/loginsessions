const express = require('express');
const session = require('express-session');
const path = require('path');
const login = require('./routes/login');
const core = require('./routes/core');
const logout = require('./routes/logout');
const register = require('./routes/register');
const auth = require('./auth');

const app = express();
app.use(session({
  secret: 'thecakeisalie',
  resave: false,
  saveUninitialized: false,
  maxAge: 360000
}));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/register', register);
app.use('/login', login);

app.use(auth);



app.use('/logout', logout);
app.use(express.static(path.join(__dirname, 'view/build')));
app.use('/', core);

app.listen(process.env.PORT || 5000);