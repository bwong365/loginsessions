const register = require('express').Router();

register.route('/').get((req, res) => {
  req.session.user = 'matt';
  res.send('you are now registered!');
})

module.exports = register;