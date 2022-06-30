const {
  getAllStudents,
  createStudent,
  deleteStudent,
} = require('./students.services');

async function handlerCreateStudent(req, res) {
  const newStudent = req.body;
  console.log('NEW STUDENT: ', newStudent);
  try {
    const student = await createStudent(newStudent);
    res.status(201).json(student);
  } catch (error) {
    // res.status(500).json({ message: `Student was not created` });
    console.log('---> TEST ERROR', error.message)
    res.status(500).json(error.message);
  }
}

async function handlerGetStudents(req, res) {
  const students = await getAllStudents();
  res.status(200).json(students);
}

async function handlerDeleteStudent(req, res) {
  const { id } = req.params;
  const response = await deleteStudent(id);
  if (!response) {
    res.status(500).json({ message: `Student is not found` });
  }
  res.status(202).json({ message: `Studen was deleted` });
}

module.exports = {
  handlerCreateStudent,
  handlerGetStudents,
  handlerDeleteStudent,
};
