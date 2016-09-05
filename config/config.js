var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'pagefbi2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku_z7dxc7qj:astkufft25bj4vvgge30q0pkmc@ds017736.mlab.com:17736/heroku_z7dxc7qj'
  },



  test: {
    root: rootPath,
    app: {
      name: 'pagefbi2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku_z7dxc7qj:astkufft25bj4vvgge30q0pkmc@ds017736.mlab.com:17736/heroku_z7dxc7qj'
  },

  production: {
    root: rootPath,
    app: {
      name: 'pagefbi2'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://heroku_z7dxc7qj:astkufft25bj4vvgge30q0pkmc@ds017736.mlab.com:17736/heroku_z7dxc7qj'
  }
};

module.exports = config[env];
