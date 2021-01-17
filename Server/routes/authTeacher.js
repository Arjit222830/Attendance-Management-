const express = require('express');
const { authTeachers } = require('../controller/authTeacherController');
const router = express.Router();

router.post('/' ,authTeachers);

module.exports = router;