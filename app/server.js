var express = require('express');
var app = express();
var config = require('app/config');

app.use('/', express.static('app/'));

var server = app.listen(config.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});
