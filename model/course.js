const mongoose = require('mongoose');
const main_connection = require('../config/config').mainDb;

const CourseSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number,required: true},
    teachers:[{type:String}]
},{timestamp: true});
module.exports =  main_connection.model('course',CourseSchema);
