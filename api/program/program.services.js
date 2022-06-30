const ProgramModel = require('./program.model');

async function createProgram(newProgram) {
  try {
    const program = await ProgramModel.create(newProgram);
    return program;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createProgram,
}
