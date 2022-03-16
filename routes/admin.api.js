const express = require('express'),
    router = express.Router();
   

const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({extended: true});
const authlocal= require('../middleware/check-auth');
const CourseController = require('../controller/CourseController');
const AdminAuthController = require('../controller/AdminAuthController');



router.post('/create-admin',urlencodedParser,AdminAuthController.createAdmin);
router.post('/admin-login',urlencodedParser,AdminAuthController.login);
router.post('/create-course',urlencodedParser, authlocal.isAuthenticated,CourseController.createCourse);
router.get('/get-all-course',urlencodedParser, authlocal.isAuthenticated,CourseController.getAllCourse);

module.exports=router;
