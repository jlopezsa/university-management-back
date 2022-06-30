const StudentsModel = require('./students.model');

async function createStudent(newStudent) {
  try {
    const student = await StudentsModel.create(newStudent);
    return student;
  } catch (error) {
    throw new Error(error);
  }
}

function getAllStudents() {
  const response = StudentsModel.find();
  return response;
}

module.exports = {
  createStudent,
  getAllStudents,
}
