const {
  createProgram,
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

module.exports = {
  handlerCreateProgram,
};
