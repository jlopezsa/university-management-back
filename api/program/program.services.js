const ProgramModel = require('./program.model');

async function createProgram(newProgram) {
  try {
    const program = await ProgramModel.create(newProgram);
    return program;
  } catch (error) {
    throw new Error(error);
  }
}

function getAllPrograms() {
  const response = ProgramModel.find();
  return response;
}

async function deleteProgram(id) {
  const program = await ProgramModel.findByIdAndDelete(id);
  if (!program) {
    return null;
  }
  return program;
}

module.exports = {
  createProgram,
  getAllPrograms,
  deleteProgram,
}
