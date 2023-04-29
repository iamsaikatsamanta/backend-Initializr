const express = require('express'),
    router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const UserAuth = require('../controller/UserAuthController');

// router.post('/create-user', urlencodedParser, UserAuth.createUser);
// router.get('/get-user', urlencodedParser, UserAuth.getUser);
// router.post('/update-user', urlencodedParser, UserAuth.UpdateUser);
// router.post('/create-course', urlencodedParser, UserAuth.CreateCourse);
// router.get('/get-all-course', urlencodedParser, UserAuth.getAllCourse);

module.exports = router;
