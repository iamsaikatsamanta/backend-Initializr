const express = require('express'),
    router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const UserAuth = require('../controller/UserAuthController');


module.exports = router;
