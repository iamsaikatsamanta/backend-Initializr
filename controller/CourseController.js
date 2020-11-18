const Common = require('../utils/response');
const Course = require('../model/course');
const CourseTopic = require('../model/course');
const VideoContent = require('../model/course');

exports.createCourse =(req,res)=>{
    const course = new Course({
        name: req.body.name,
        price: req.body.price,
        teachers: req.body.teachers
    })
    .save()
    .then(resp=>{
        return res.json(Common.generateResponse(0,resp));
    })
    .catch(err=>{
        return res.json(Common.generateResponse(0,err));
    })
}

exports.getAllCourse=(req,res)=>{
    Course.find()
    .then(resp=>{
        return res.json(Common.generateResponse(0,resp));
    })
    .catch(err=>{
        return res.json(Common.generateResponse(0,err));
    })
}
// exports.getAllCourse=(req,res)=>{
//     Course.find()
//     .then(resp=>{
//         return res.json(Common.generateResponse(0,resp));
//     })
//     .catch(err=>{
//         return res.json(Common.generateResponse(0,err));
//     })
// }