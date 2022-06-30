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

module.exports = {
  createProgram,
  getAllPrograms,
}
