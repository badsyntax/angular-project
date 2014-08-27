var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res) {
  res.render('page', {
    title: 'Home'
  });
});

/* GET Sign In page */
router.get('/sign-in', function(req, res) {
  res.render('page', {
    title: 'Sign In'
  });
});

module.exports = router;
