const { Router } = require('express');

const {
  handlerCreateProgram,
  handlerGetPrograms,
} = require('./program.controller');

const router = Router();

router.post('/', handlerCreateProgram);
router.get('/', handlerGetPrograms);

module.exports = router;
