const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('cypress/fixtures/db.json'); // Path to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === '/users') {
    // Save user data to db.json
    const user = req.body;
    user.id = Date.now().toString(); // Generate unique ID (simplified)
    router.db.get('users').push(user).write();
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
