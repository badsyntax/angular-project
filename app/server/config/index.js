var path = require('path');
var nconf = require('nconf');

nconf.argv().env().file({
  file: path.join(__dirname, 'app.json')
});

module.exports = nconf;
