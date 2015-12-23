'use strict';

var env = {
  appName: 'academy-manager',
  port: normalizePort(process.env.PORT || '1337'),
  db: {
      DB_URI: process.env.DB_URI || 'mongodb://localhost/academy-manager',
      DB_CREDENTIAL: {user: process.env.DB_USER || '', pass: process.env.DB_PASS || ''}
    }
};

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

module.exports = Object.freeze(env);
