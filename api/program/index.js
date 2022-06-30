const { Router } = require('express');

const {
  handlerCreateProgram,
} = require('./program.controller');

const router = Router();

router.post('/', handlerCreateProgram);

module.exports = router;
