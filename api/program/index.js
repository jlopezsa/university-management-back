const { Router } = require('express');

const {
  handlerCreateProgram,
  handlerGetPrograms,
  handlerDeleteProgram,
  handlerUpdateProgram,
  handlerSearchProgram,
} = require('./program.controller');

const router = Router();

router.post('/', handlerCreateProgram);
router.get('/', handlerGetPrograms);
router.delete('/:id', handlerDeleteProgram);
router.patch('/:id', handlerUpdateProgram);
router.get('/search', handlerSearchProgram);

module.exports = router;
