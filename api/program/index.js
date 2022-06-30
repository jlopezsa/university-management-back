const { Router } = require('express');

const {
  handlerCreateProgram,
  handlerGetPrograms,
  handlerDeleteProgram,
  handlerUpdateProgram,
} = require('./program.controller');

const router = Router();

router.post('/', handlerCreateProgram);
router.get('/', handlerGetPrograms);
router.delete('/:id', handlerDeleteProgram);
router.patch('/:id', handlerUpdateProgram);

module.exports = router;
