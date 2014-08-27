var nconf = require('nconf');

nconf.argv().env().file({
  file: 'app/config/app.json'
});
