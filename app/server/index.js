var path = require('path');
var express = require('express');

var config = require(path.join(__dirname, 'config'));
var routes = require('./routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', routes.home);
app.use('/sign-in', routes.signIn);

var server = app.listen(config.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});

module.exports = app;
