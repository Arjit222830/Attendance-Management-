const jwt= require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 150
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        minlength: 3,
        unique: true,
        required: true,
        maxlength: 150,
    },
    password: { 
        type: String,
        required: true,
        min: 5,
        max: 30
    }
 });

studentSchema.methods.generateAuthToken = function(){ 
    const token = jwt.sign({_id: this._id } , config.get('jwtPrivateKey'));
    return token;
} 

const Student = mongoose.model('student', studentSchema);

exports.Student = Student;

