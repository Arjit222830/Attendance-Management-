const express = require('express');
const router = express.Router();
const { authStudents} = require('../controller/authStudentController');

router.post('/' , authStudents);
    
module.exports = router;