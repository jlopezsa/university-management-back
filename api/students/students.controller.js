const {
  getAllStudents,
  createStudent,
} = require('./students.services');

async function handlerCreateStudent(req, res) {
  const newStudent = req.body;
  console.log('NEW STUDENT: ', newStudent);
  try {
    const student = await createStudent(newStudent);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json(student);
  }
}

async function handlerGetStudents(req, res) {
  const students = await getAllStudents();
  res.status(200).json(students);
}

module.exports = {
  handlerCreateStudent,
  handlerGetStudents,
};
