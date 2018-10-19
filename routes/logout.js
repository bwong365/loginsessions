const logout = require('express').Router();

logout.route('/').get((req, res) => {
  console.log(req.session.user);
  req.session.destroy();
  res.send('You are now logged out');
})

module.exports = logout;