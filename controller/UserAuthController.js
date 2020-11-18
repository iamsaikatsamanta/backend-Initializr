const User = require('../model/user');
const Course = require('../model/course');
const Common = require('../utils/response');
exports.createUser = (req,res) =>{
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
        .then(resp =>{
            return res.json(Common.generateResponse(0,resp));
        })
        .catch(err=>{
            return res.json(Common.generateResponse(100,err));
        });
};
exports.getUser = (req,res)=>{
    User.findByPk(4)
        .then(resp =>{
            return res.json(Common.generateResponse(0,resp));
        })
        .catch(err=>{
            return res.json(Common.generateResponse(100,err));
        });
}
exports.UpdateUser = (req,res)=>{
    User.update(req.body, {where: {
        id: 1
        }})
        .then(resp =>{
            return res.json(Common.generateResponse(0,resp));
        })
        .catch(err=>{
            return res.json(Common.generateResponse(100,err));
        });
}
exports.CreateCourse = (req,res) =>{
    Course.create({
        name: req.body.name
    })
        .then(resp=>{
            return res.json(Common.generateResponse(0,resp));
        })
        .catch(err=>{
            return res.json(Common.generateResponse(100,err));
        })
}
exports.getAllCourse = (req,res) =>{
    Course.findAll()
        .then(resp=>{
            return res.json(Common.generateResponse(0,resp));
        })
        .catch(err=>{
            return res.json(Common.generateResponse(100,err));
        })
}
