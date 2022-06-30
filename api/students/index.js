const { Router } = require('express');

const {
  handlerCreateStudent,
  handlerGetStudents,
} = require('./students.controller');

const router = Router();

router.post('/', handlerCreateStudent);
router.get('/', handlerGetStudents);

module.exports = router;
