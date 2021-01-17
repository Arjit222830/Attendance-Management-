const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const cors= require('cors');
const students = require('./routes/students');
const teachers = require('./routes/teachers');
const authStudents = require('./routes/authStudent');
const authTeachers = require('./routes/authTeacher');

mongoose.connect(config.get('db') , { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log(`Connected to ${config.get('db')}`))
    .catch(err =>  console.error('Could not connect to mongodb'));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");

app.use(cors());

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/student' , students);
app.use('/teacher' , teachers);
app.use('/student/login' , authStudents);
app.use('/teacher/login' , authTeachers);


const port=process.env.PORT || 8000 ;
console.log(port);
const server = app.listen(port, ()=> console.log(`Listening on port ${port}...`));
var env = process.env.NODE_ENV || 'development';
console.log(env);