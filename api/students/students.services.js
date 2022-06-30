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

async function deleteStudent(id) {
  const student = await StudentsModel.findByIdAndDelete(id);
  if (!student) {
    return null;
  }
  return student;
}

async function updateStudent(id, newInfo) {
  const updateInfo = await StudentsModel.findByIdAndUpdate(id, newInfo, { new: true });
  if(!updateInfo) {
    return null
  }
  return updateInfo;
}

module.exports = {
  createStudent,
  getAllStudents,
  deleteStudent,
  updateStudent,
}
