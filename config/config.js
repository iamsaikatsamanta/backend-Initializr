
var mongoConfig = {
    link: process.env.MONGO_CON
};


var JWT_SECRET = {"Secret": process.env.JWT_SECRET};

module.exports = { mongoConfig: mongoConfig, JWT_SECRET: JWT_SECRET} ;
