const bcrypt = require('bcrypt');
const { Student } = require('../models/student');

exports.authStudents = async (req , res) => {
    console.log("fsdds0");
    let student = await Student.findOne({email: req.body.email});
    console.log(student);
    if(!student) 
        return res.send({status:400,message:'Invalid email or password'});

    const validPassword = await bcrypt.compare(req.body.password , student.password);
    if(!validPassword)  
        return res.send({status:400,message:'Invalid email or password'});

    const token = student.generateAuthToken();
    res.set('x-auth-token',token).send({status:200,message:"Successful Logged In",name: student.name,token:null});
};
