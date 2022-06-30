const { Router } = require('express');

const {
  handlerCreateStudent,
  handlerGetStudents,
  handlerDeleteStudent,
  handlerUpdateStudent,
} = require('./students.controller');

const router = Router();

router.post('/', handlerCreateStudent);
router.get('/', handlerGetStudents);
router.delete('/:id', handlerDeleteStudent);
router.patch('/:id', handlerUpdateStudent);

module.exports = router;
