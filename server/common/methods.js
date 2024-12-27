const routes = require('../memory/routes');

const methods = {
  get: function (path, callback) {
    routes.push({
      method: 'GET',
      path,
      handler: callback
    });

    return this;
  },

  post: function (path, callback) {
    routes.push({
      method: 'POST',
      path,
      handler: callback
    });

    return this;
  }
};

module.exports = methods;
