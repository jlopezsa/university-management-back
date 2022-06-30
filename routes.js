const students = require('./api/students');
const program = require('./api/program');

function routes(app) {
  app.use('/api/students', students);
  app.use('/api/program', program);
}

module.exports = routes;
