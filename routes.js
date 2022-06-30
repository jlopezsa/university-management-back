const students = require('./api/students');

function routes(app) {
  app.use('/api/students', students);
}

module.exports = routes;
