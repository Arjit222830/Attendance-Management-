const auth = require('../middleware/authorization');
const express = require('express');

const router = express.Router();

const { getStudents , regStudents, updateStudents , delStudents } = require('../controller/studentController');

router.get('/' , getStudents);

router.post('/' ,regStudents);

router.put('/:id' ,updateStudents);

router.delete('/:id' ,delStudents);

module.exports = router;