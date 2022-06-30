const { Router } = require('express');

const {
  handlerGetStudents,
} = require('./students.controller');

const router = Router();

router.get('/', handlerGetStudents);

module.exports = router;
