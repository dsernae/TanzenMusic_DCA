var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'tanzenServer'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tanzenServer-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'tanzenServer'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tanzenServer-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'tanzenServer'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/tanzenServer-production'
  }
};

module.exports = config[env];
