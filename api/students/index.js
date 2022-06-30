const { Router } = require('express');

const {
  handlerCreateStudent,
  handlerGetStudents,
  handlerDeleteStudent,
  handlerUpdateStudent,
  handlerSearchStudents,
} = require('./students.controller');

const router = Router();

router.post('/', handlerCreateStudent);
router.get('/', handlerGetStudents);
router.delete('/:id', handlerDeleteStudent);
router.patch('/:id', handlerUpdateStudent);
router.get('/search', handlerSearchStudents);

module.exports = router;
