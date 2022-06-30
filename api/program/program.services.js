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

async function updateProgram(id, newInfo) {
  const updateInfo = await ProgramModel.findByIdAndUpdate(id, newInfo, { new: true });
  if(!updateInfo) {
    return null
  }
  return updateInfo;
}

async function getProgramByName(filterCondition) {
  try {
    const programFiltered = await ProgramModel.find(filterCondition);
    return programFiltered;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createProgram,
  getAllPrograms,
  deleteProgram,
  updateProgram,
  getProgramByName,
}
