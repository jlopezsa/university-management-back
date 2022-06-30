const { Router } = require('express');

const router = Router();

router.get('/', handlerGetStudents);

module.exports = router;
