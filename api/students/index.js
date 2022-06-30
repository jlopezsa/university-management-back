const { Router } = require('express');

const {
  handlerCreateStudent,
  handlerGetStudents,
  handlerDeleteStudent,
} = require('./students.controller');

const router = Router();

router.post('/', handlerCreateStudent);
router.get('/', handlerGetStudents);
router.delete('/:id', handlerDeleteStudent);

module.exports = router;
