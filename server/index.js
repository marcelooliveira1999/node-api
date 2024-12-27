const { createServer } = require('node:http');

const methods = require('./common/methods');
const routes = require('./memory/routes');
const Reply = require('./common/reply');

function server() {
  const app = {
    ...methods,

    listen: function (port) {
      const server = createServer(function (request, response) {
        const path = request.url;
        const method = request.method;

        const route = routes.find(
          (r) => r.path === path && r.method === method
        );

        if (route) {
          const reply = new Reply(response);
          route.handler(request, reply);
        } else {
          response.statusCode = 404;
          response.setHeader('content-type', 'text/plain');
          response.end('Not found');
        }
      });

      server.listen(port, function () {
        const date = new Date();

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        const time = `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
        console.log(`[Node] ${time} - Listening on port ${port}`);
      });
    }
  };

  return app;
}

module.exports = server;
