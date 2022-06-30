const StudentsModel = require('./students.model');

function getAllStudents() {
  const response = StudentsModel.find();
  return response;
}

module.exports = {
  getAllStudents,
}
