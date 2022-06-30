const {
  getAllStudents,
} = require('./students.services');

async function handlerGetStudents(req, res) {
  const students = await getAllStudents();
  res.status(200).json(students);
}

module.exports = {
  handlerGetStudents,
};
