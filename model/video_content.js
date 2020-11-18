const mongoose = require('mongoose');
const main_connection = require('../config/config').mainDb;

const videoContentSchema = mongoose.Schema({
  title: {type: String,required: true},
  description: {type: String},
  url: {type: String,required: true}
},{timestamp: true});
module.exports =  main_connection.model('video_content',videoContentSchema);
