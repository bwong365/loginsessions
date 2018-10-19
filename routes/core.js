const core = require('express').Router();
const path = require('path')

core.route('/').get((req, res, next) => {
  console.log(req.session.user);
  
  res.sendFile(path.join(__dirname, '..' ,'view/build/index.html'));
})

module.exports = core;