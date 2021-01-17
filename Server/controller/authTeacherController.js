const bcrypt = require('bcrypt');
const { Teacher } = require('../models/teacher');

exports.authTeachers = async (req , res) => {
    let teacher = await Teacher.findOne({email: req.body.email});
    if(!teacher) 
        return res.send({status:400,message:'Invalid email or password'});

    const validPassword = await bcrypt.compare(req.body.password , teacher.password);
    if(!validPassword)  
        return res.send({status:400,message:'Invalid email or password'});

    const token = teacher.generateAuthToken();
    res.set('x-auth-token',token).send({status:200,message:"Successful Logged In",name: teacher.name,token:token});
};
