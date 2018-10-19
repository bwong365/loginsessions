const login = require('express').Router();
const path = require('path');


login.route('/').get((req, res) => {
  console.log('attempint login')
  res.sendFile(path.join(__dirname, '..', 'content', 'login.html'));
})

module.exports = login;