const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.SQL_DB_NAME,
    process.env.SQL_USER,process.env.SQL_PASSWORD,
    {dialect: 'postgres', host: process.env.SQL_HOST})

module.exports= sequelize;
