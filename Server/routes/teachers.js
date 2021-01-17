const auth = require('../middleware/authorization');
const express = require('express');

const router = express.Router();

const { getTeachers , regTeachers, updateTeachers , delTeachers } = require('../controller/teacherController');

router.get('/' ,getTeachers);

router.post('/' ,regTeachers);

router.put('/:id' , updateTeachers);

router.delete('/:id' ,delTeachers);


module.exports = router;