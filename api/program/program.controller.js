const {
  createProgram,
  getAllPrograms,
} = require('./program.services');

async function handlerCreateProgram(req, res) {
  const newProgram = req.body;
  console.log('NEW PROGRAM: ', newProgram);
  try {
    const program = await createProgram(newProgram);
    res.status(201).json(program);
  } catch (error) {
    console.log('---> TEST ERROR', error.message)
    res.status(500).json(error.message);
  }
}

async function handlerGetPrograms(req, res) {
  const programs = await getAllPrograms();
  res.status(200).json(programs);
}

module.exports = {
  handlerCreateProgram,
  handlerGetPrograms,
};
