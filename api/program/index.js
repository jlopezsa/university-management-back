const { Router } = require('express');

const {
  handlerCreateProgram,
  handlerGetPrograms,
  handlerDeleteProgram,
} = require('./program.controller');

const router = Router();

router.post('/', handlerCreateProgram);
router.get('/', handlerGetPrograms);
router.delete('/:id', handlerDeleteProgram);


module.exports = router;
