const mongoose = require('mongoose');
const sequelize = require('./sqlConfig');
const mongoConfig = {
    link: process.env.MONGO_CON
};

const main  =  mongoose.createConnection(process.env.MONGO_CON, { useNewUrlParser: true , } , (err)=>{
  if (err) {
    console.log('Could NOT connect to stats mongodb: ', err); // Return error message
  } else {
    console.log('Connected to ' + process.env.MONGO_CON); // Return success message
  }
});
sequelize.sync().then(res=>{
    console.log('Connected to ' + process.env.SQL_HOST); // Return success message
})
.catch(err=>{
    console.log('Could NOT connect to stats Postgres: ', err); // Return error message
});
var JWT_SECRET = {"Secret": process.env.JWT_SECRET};

module.exports = { mongoConfig: mongoConfig, JWT_SECRET: JWT_SECRET, mainDb: main} ;
