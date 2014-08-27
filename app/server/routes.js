var express = require('express');
var router = express.Router();

exports.home = (function() {

  /* GET home page */
  router.get('/', function(req, res) {
    res.render('home', {
      title: 'Home'
    });
  });

  return router;
}());

exports.signIn = (function() {

  /* GET Sign In page */
  router.get('/sign-in', function(req, res) {
    res.render('sign-in', {
      title: 'Sign In'
    });
  });

  return router;
}());

