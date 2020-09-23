const mongoose = require('mongoose');
const main_connection = require('../config/config').mainDb;

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone_no: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    email_verified: {type: Boolean,default: false},
    birthday: {type: Date},
    img_url: {type: String},
    otp: {type: Number},
    deviceId: [{type: String}],
    isDeleted: {type: Boolean, default: false},
    address: {
        line: {type: String},
        city: {type: String},
        state: {type: String},
        pincode: {type: String}
    }
},{timestamp: true});
module.exports =  main_connection.model('user',UserSchema);

