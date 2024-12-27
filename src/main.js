const server = require('../server');
const app = server();

app
  .get('/hello', function (req, reply) {
    reply.send('Hello');
  })
  .post('/user', function (req, reply) {
    reply.status(201).json({
      message: 'User created'
    });
  });

const port = process.env.PORT;
app.listen(port);
